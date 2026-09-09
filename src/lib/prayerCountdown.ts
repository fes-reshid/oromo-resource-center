export const MELBOURNE_TZ = 'Australia/Melbourne';

// Builds the UTC instant corresponding to a given wall-clock time in
// Melbourne, regardless of the runtime's own local timezone. Works by
// comparing how a reference instant reads in UTC vs. in Melbourne — the
// difference is Melbourne's current UTC offset (10 or 11 hours,
// depending on daylight saving) — then applying that offset to the
// naive UTC construction of the target wall-clock time.
export function melbourneWallTimeToDate(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
): Date {
  const reference = new Date(Date.UTC(year, month - 1, day, hour, minute));
  const asUtcWallClock = new Date(reference.toLocaleString('en-US', { timeZone: 'UTC' }));
  const asMelbourneWallClock = new Date(
    reference.toLocaleString('en-US', { timeZone: MELBOURNE_TZ }),
  );
  const offsetMs = asMelbourneWallClock.getTime() - asUtcWallClock.getTime();
  return new Date(Date.UTC(year, month - 1, day, hour, minute) - offsetMs);
}

export interface MelbourneNow {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  weekday: string;
}

export function getMelbourneNow(date: Date): MelbourneNow {
  const parts = new Intl.DateTimeFormat('en-AU', {
    timeZone: MELBOURNE_TZ,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    weekday: 'long',
    hour12: false,
  }).formatToParts(date);

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '';

  return {
    year: Number(get('year')),
    month: Number(get('month')),
    day: Number(get('day')),
    hour: Number(get('hour')) % 24,
    minute: Number(get('minute')),
    second: Number(get('second')),
    weekday: get('weekday'),
  };
}

export function formatCountdown(secondsUntil: number): string {
  const hours = Math.floor(secondsUntil / 3600);
  const minutes = Math.floor((secondsUntil % 3600) / 60);
  const seconds = secondsUntil % 60;
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m ${seconds}s`;
}
