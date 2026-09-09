import { Coordinates, CalculationMethod, PrayerTimes } from 'adhan';
import { melbourneWallTimeToDate, type MelbourneNow } from './prayerCountdown';

// Approximate coordinates for Mount Cottrell, VIC (Oromo Resource Centre's
// location), used to calculate live daily prayer times the same way a
// service like IslamicFinder does — via astronomical calculation rather
// than a fixed table. Not independently verified against
// islamicfinder.org (that site isn't reachable from this environment) —
// spot-check today's times there and adjust MOUNT_COTTRELL_COORDS or the
// calculation method below if they drift by more than a couple of minutes.
const MOUNT_COTTRELL_COORDS = new Coordinates(-37.752, 144.622);

export interface LivePrayerTimes {
  fajr: Date;
  sunrise: Date;
  dhuhr: Date;
  asr: Date;
  maghrib: Date;
  isha: Date;
}

function dateFromMelbourneCalendarDay(now: MelbourneNow): Date {
  return new Date(now.year, now.month - 1, now.day);
}

export function getLivePrayerTimes(now: MelbourneNow): LivePrayerTimes {
  const params = CalculationMethod.MuslimWorldLeague();
  const calendarDay = dateFromMelbourneCalendarDay(now);
  const pt = new PrayerTimes(MOUNT_COTTRELL_COORDS, calendarDay, params);
  return {
    fajr: pt.fajr,
    sunrise: pt.sunrise,
    dhuhr: pt.dhuhr,
    asr: pt.asr,
    maghrib: pt.maghrib,
    isha: pt.isha,
  };
}

export interface DailyPrayer {
  name: string;
  adhan: Date;
  iqama: Date | null;
}

const MINUTE = 60 * 1000;

function addMinutes(date: Date, minutes: number): Date {
  return new Date(date.getTime() + minutes * MINUTE);
}

// Zuhr Iqama is fixed at 1:30 PM every day, regardless of the Adhan time.
// Fajr Iqama is 30 minutes after its Adhan; every other prayer's Iqama is
// 10 minutes after its Adhan.
export function getDailyPrayers(now: MelbourneNow): DailyPrayer[] {
  const times = getLivePrayerTimes(now);
  const zuhrIqama = melbourneWallTimeToDate(now.year, now.month, now.day, 13, 30);

  return [
    { name: 'Fajr', adhan: times.fajr, iqama: addMinutes(times.fajr, 30) },
    { name: 'Sunrise', adhan: times.sunrise, iqama: null },
    { name: 'Dhuhr', adhan: times.dhuhr, iqama: zuhrIqama },
    { name: 'Asr', adhan: times.asr, iqama: addMinutes(times.asr, 10) },
    { name: 'Maghrib', adhan: times.maghrib, iqama: addMinutes(times.maghrib, 10) },
    { name: 'Isha', adhan: times.isha, iqama: addMinutes(times.isha, 10) },
  ];
}

export interface NextSalah {
  name: string;
  adhan: Date;
  secondsUntil: number;
}

function nextMelbourneCalendarDay(now: MelbourneNow): MelbourneNow {
  const next = new Date(now.year, now.month - 1, now.day + 1);
  return { ...now, year: next.getFullYear(), month: next.getMonth() + 1, day: next.getDate() };
}

// The five daily Salah (excludes Sunrise, which isn't a prayer). Finds the
// next one whose Adhan hasn't happened yet, rolling over to tomorrow's
// Fajr if every prayer for today has already passed.
export function getNextSalah(instant: Date, now: MelbourneNow): NextSalah {
  const today = getDailyPrayers(now).filter((p) => p.name !== 'Sunrise');
  const upcoming = today.find((p) => p.adhan.getTime() > instant.getTime());
  if (upcoming) {
    return {
      name: upcoming.name,
      adhan: upcoming.adhan,
      secondsUntil: Math.round((upcoming.adhan.getTime() - instant.getTime()) / 1000),
    };
  }

  const tomorrowFajr = getDailyPrayers(nextMelbourneCalendarDay(now))[0];
  return {
    name: tomorrowFajr.name,
    adhan: tomorrowFajr.adhan,
    secondsUntil: Math.round((tomorrowFajr.adhan.getTime() - instant.getTime()) / 1000),
  };
}
