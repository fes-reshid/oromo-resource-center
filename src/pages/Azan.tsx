import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sunrise,
  Sun,
  CloudSun,
  Sunset,
  Moon,
  Building2,
  Heart,
  Calendar,
  Clock,
  MapPin,
  PartyPopper,
  FerrisWheel,
  Candy,
  Palette,
  Popcorn,
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { afterPrayerDhikr, type DhikrSlide } from '@/data/afterPrayerDhikr';
import { jumuahTime } from '@/data/prayerTimes';
import { formatHijri } from '@/lib/hijri';
import { getMelbourneNow, formatCountdown, MELBOURNE_TZ } from '@/lib/prayerCountdown';
import { getDailyPrayers, getNextSalah } from '@/lib/livePrayerTimes';
import { getAppBase } from '@/lib/appBase';
import eventsContent from '@/content/upcoming-events.json';

type EventItem = (typeof eventsContent.events)[number];

const ACTIVITY_ICONS: Record<string, typeof PartyPopper> = {
  'Jumping Castle': PartyPopper,
  'Chair O Plane': FerrisWheel,
  'Fairy Floss': Candy,
  'Face Painting': Palette,
  Popcorn: Popcorn,
};

const PRAYER_ICONS: Record<string, typeof Sunrise> = {
  Fajr: Sunrise,
  Sunrise: Sunrise,
  Dhuhr: Sun,
  Asr: CloudSun,
  Maghrib: Sunset,
  Isha: Moon,
};

const prayerTimeFormatter = new Intl.DateTimeFormat('en-AU', {
  timeZone: MELBOURNE_TZ,
  hour: 'numeric',
  minute: '2-digit',
  hour12: true,
});

type Slide =
  | { kind: 'dhikr'; id: number; dhikr: DhikrSlide }
  | { kind: 'event'; id: number; event: EventItem }
  | { kind: 'donation'; id: number };

const slides: Slide[] = [
  ...afterPrayerDhikr.map((dhikr): Slide => ({ kind: 'dhikr', id: dhikr.id, dhikr })),
  ...eventsContent.events.map((event, i): Slide => ({ kind: 'event', id: 2000 + i, event })),
  { kind: 'donation', id: 1000 },
];

const SLIDE_INTERVAL_MS = 9000;

const Azan = () => {
  const [now, setNow] = useState(() => new Date());
  const [slideIndex, setSlideIndex] = useState(0);
  const donateUrl = useMemo(
    () => `${window.location.origin}${getAppBase()}donate`,
    [],
  );

  useEffect(() => {
    const tick = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(tick);
  }, []);

  useEffect(() => {
    const advance = setInterval(() => {
      setSlideIndex((i) => (i + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(advance);
  }, []);

  const melbourneNow = useMemo(() => getMelbourneNow(now), [now]);
  const todaysPrayers = useMemo(
    () => getDailyPrayers(melbourneNow),
    [melbourneNow.year, melbourneNow.month, melbourneNow.day],
  );
  const nextPrayer = useMemo(
    () => getNextSalah(now, melbourneNow),
    [now, melbourneNow],
  );
  const hijriDate = useMemo(
    () => formatHijri(new Date(melbourneNow.year, melbourneNow.month - 1, melbourneNow.day)),
    [melbourneNow.year, melbourneNow.month, melbourneNow.day],
  );

  const clockDisplay = useMemo(() => {
    const hour12 = melbourneNow.hour % 12 === 0 ? 12 : melbourneNow.hour % 12;
    const meridiem = melbourneNow.hour < 12 ? 'AM' : 'PM';
    return {
      time: `${hour12}:${String(melbourneNow.minute).padStart(2, '0')}`,
      meridiem,
    };
  }, [melbourneNow.hour, melbourneNow.minute]);

  const gregorianDisplay = useMemo(() => {
    return `${melbourneNow.weekday}, ${new Intl.DateTimeFormat('en-AU', {
      month: 'long',
      day: 'numeric',
    }).format(new Date(melbourneNow.year, melbourneNow.month - 1, melbourneNow.day))}`;
  }, [melbourneNow.weekday, melbourneNow.year, melbourneNow.month, melbourneNow.day]);

  const slide = slides[slideIndex];
  const isDonationSlide = slide.kind === 'donation';

  return (
    <div className="h-screen w-screen overflow-hidden bg-secondary/30 flex flex-col">
      <div className="flex-1 flex flex-col lg:flex-row gap-4 p-4 min-h-0">
        {/* Left panel: rotating dhikr / donation carousel */}
        <div
          className={`flex-[2] border-4 rounded-2xl p-6 lg:p-10 flex flex-col min-h-0 relative overflow-hidden transition-colors duration-500 ${
            isDonationSlide
              ? 'bg-zinc-900 border-zinc-900 text-white'
              : 'bg-card border-primary text-foreground'
          }`}
        >
          {slide.kind === 'dhikr' ? (
            <>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-2xl lg:text-4xl font-bold text-primary">
                    After Prayer Dhikr
                  </h1>
                  <p className="text-sm lg:text-base text-muted-foreground">
                    Zikrii Salaata Booda — Oromo Resource Centre
                  </p>
                </div>
                <img
                  src="lovable-uploads/b99f89fa-f302-4d77-8775-fb2f5e6a9ec1.png"
                  alt="Oromo Resource Centre Inc Logo"
                  className="w-14 h-14 lg:w-20 lg:h-20 object-contain flex-shrink-0"
                />
              </div>

              <div className="flex-1 flex flex-col justify-center min-h-0">
                <div key={slide.dhikr.id} className="animate-dhikr-slide-in overflow-y-auto">
                  <p className="text-sm lg:text-lg font-semibold text-secondary-foreground/70 uppercase tracking-wide mb-4">
                    {slide.dhikr.label}
                  </p>
                  <p
                    dir="rtl"
                    lang="ar"
                    className="text-2xl lg:text-4xl leading-relaxed lg:leading-loose mb-6 font-arabic"
                  >
                    {slide.dhikr.arabic}
                  </p>
                  <p className="text-base lg:text-xl text-muted-foreground leading-relaxed lg:leading-loose">
                    {slide.dhikr.oromo}
                  </p>
                </div>
              </div>
            </>
          ) : slide.kind === 'event' ? (
            <div key={slide.id} className="animate-dhikr-slide-in flex-1 flex flex-col min-h-0 overflow-y-auto">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full mb-2">
                    <PartyPopper className="h-4 w-4 text-primary" />
                    <span className="text-xs lg:text-sm font-semibold text-primary uppercase tracking-wide">
                      Upcoming Event
                    </span>
                  </div>
                  <h1 className="text-2xl lg:text-4xl font-extrabold text-foreground leading-tight">
                    {slide.event.title}
                  </h1>
                  <p className="text-lg lg:text-xl font-semibold text-primary">{slide.event.titleOromo}</p>
                  <p className="text-sm lg:text-base text-muted-foreground mt-1">{slide.event.tagline}</p>
                </div>
                <img
                  src="lovable-uploads/b99f89fa-f302-4d77-8775-fb2f5e6a9ec1.png"
                  alt="Oromo Resource Centre Inc Logo"
                  className="w-14 h-14 lg:w-20 lg:h-20 object-contain flex-shrink-0"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 lg:gap-3 mb-4 text-sm lg:text-base">
                <div className="flex items-center gap-2 bg-secondary/40 rounded-lg px-3 py-2">
                  <Calendar className="h-4 w-4 lg:h-5 lg:w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{slide.event.date}</span>
                </div>
                <div className="flex items-center gap-2 bg-secondary/40 rounded-lg px-3 py-2">
                  <Clock className="h-4 w-4 lg:h-5 lg:w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{slide.event.time}</span>
                </div>
                <div className="flex items-center gap-2 bg-secondary/40 rounded-lg px-3 py-2">
                  <MapPin className="h-4 w-4 lg:h-5 lg:w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{slide.event.location}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {slide.event.activities.map((activity) => {
                  const Icon = ACTIVITY_ICONS[activity] ?? PartyPopper;
                  return (
                    <span
                      key={activity}
                      className="inline-flex items-center gap-1.5 text-xs lg:text-sm font-medium bg-primary/10 text-primary px-3 py-1.5 rounded-full"
                    >
                      <Icon className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
                      {activity}
                    </span>
                  );
                })}
              </div>

              <p className="text-sm lg:text-base text-muted-foreground mb-2">{slide.event.foodNote}</p>
              <p className="text-primary font-medium text-sm lg:text-base leading-relaxed">
                {slide.event.closingOromo}
              </p>
            </div>
          ) : (
            <div
              key="donation"
              className="animate-dhikr-slide-in flex-1 flex flex-col lg:flex-row items-center gap-8 min-h-0"
            >
              <div className="flex-1 flex flex-col justify-center">
                <h1 className="text-2xl lg:text-4xl font-bold mb-2">
                  Setup Monthly Recurring Donations
                </h1>
                <h2 className="text-xl lg:text-2xl font-semibold text-primary mb-4">
                  Support the Oromo Resource Centre
                </h2>
                <p className="text-sm lg:text-lg text-white/80 mb-6 max-w-md">
                  Your donation funds our Saturday school, cultural programs, and
                  Islamic burial services. All donations are tax deductible and
                  count as Sadaqah Jariyah.
                </p>
                <Link
                  to="/donate"
                  className="inline-block w-fit bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-3 rounded-lg text-lg mb-6 transition-colors"
                >
                  DONATE NOW
                </Link>
                <div className="flex items-center gap-4">
                  <div className="bg-white p-2 rounded-lg flex-shrink-0">
                    <QRCodeSVG value={donateUrl} size={96} />
                  </div>
                  <p className="text-sm lg:text-base text-white/80 max-w-[14rem]">
                    Scan QR code to donate via bank transfer or the ORC website
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 bg-white text-foreground rounded-2xl p-6 lg:p-8">
                <Moon className="h-6 w-6 text-primary" />
                <img
                  src="lovable-uploads/b99f89fa-f302-4d77-8775-fb2f5e6a9ec1.png"
                  alt="Oromo Resource Centre Inc Logo"
                  className="w-28 h-28 lg:w-36 lg:h-36 object-contain"
                />
                <p className="font-bold text-center text-sm lg:text-base tracking-wide">
                  OROMO RESOURCE CENTRE INC
                </p>
              </div>
            </div>
          )}

          <div className="flex items-center justify-center gap-2 pt-6">
            {slides.map((s, i) => (
              <button
                key={`${s.kind}-${s.id}`}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setSlideIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === slideIndex
                    ? 'w-8 bg-primary'
                    : isDonationSlide
                      ? 'w-2.5 bg-white/30'
                      : 'w-2.5 bg-primary/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right panel: clock, countdown, donation */}
        <div className="flex-1 bg-primary text-primary-foreground rounded-2xl p-6 lg:p-8 flex flex-col min-h-0 overflow-y-auto">
          <div className="text-center mb-6">
            <div className="text-5xl lg:text-6xl font-bold tabular-nums">
              {clockDisplay.time}
              <span className="text-2xl lg:text-3xl font-semibold ml-1">
                {clockDisplay.meridiem}
              </span>
            </div>
            <p className="text-sm lg:text-base mt-2 opacity-90">{hijriDate} AH (approx.)</p>
            <p className="text-sm lg:text-base opacity-90">{gregorianDisplay}</p>
          </div>

          <div className="bg-primary-foreground/10 rounded-xl p-4 lg:p-5 text-center mb-6">
            <p className="text-base lg:text-lg tabular-nums">
              <span className="font-bold">{nextPrayer.name}</span> begins in{' '}
              <span className="font-bold">{formatCountdown(nextPrayer.secondsUntil)}</span>
            </p>
          </div>

          <div className="bg-primary-foreground/10 rounded-xl p-4 lg:p-5 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Heart className="h-5 w-5" />
              <h2 className="font-semibold text-lg">Donation Details</h2>
            </div>
            <div className="text-sm lg:text-base space-y-1 opacity-95">
              <p>Account Name: Oromo Resource Centre</p>
              <p>BSB: 063-622</p>
              <p>Account No: 10636275</p>
              <p>PayID: oromoirc@gmail.com</p>
            </div>
            <p className="text-sm lg:text-base mt-3 font-semibold">
              Jazaak Allahu Khayran!
            </p>
          </div>

          <div className="mt-auto flex items-center gap-4 bg-primary-foreground/10 rounded-xl p-4">
            <div className="bg-white p-2 rounded-lg flex-shrink-0">
              <QRCodeSVG value={donateUrl} size={72} />
            </div>
            <div className="flex items-center gap-2 text-sm lg:text-base opacity-95">
              <Building2 className="h-5 w-5 flex-shrink-0" />
              <span>Scan to visit our Donate page</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar: daily prayer times */}
      <div className="p-4 pt-0">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {todaysPrayers.map((prayer) => {
            const Icon = PRAYER_ICONS[prayer.name] ?? Sun;
            const isNext = prayer.adhan.getTime() === nextPrayer.adhan.getTime();
            return (
              <div
                key={prayer.name}
                className={`rounded-xl p-3 lg:p-4 text-center border-2 ${
                  isNext
                    ? 'bg-primary/10 border-primary'
                    : 'bg-card border-border'
                }`}
              >
                <div className="flex items-center justify-center gap-1.5 text-muted-foreground mb-1">
                  <Icon className="h-4 w-4" />
                  <span className="text-sm lg:text-base font-semibold text-foreground">
                    {prayer.name}
                  </span>
                </div>
                <p className="text-base lg:text-xl font-bold text-foreground tabular-nums">
                  {prayerTimeFormatter.format(prayer.adhan)}
                </p>
                {prayer.iqama && (
                  <p className="text-xs lg:text-sm text-muted-foreground tabular-nums mt-0.5">
                    Iqama {prayerTimeFormatter.format(prayer.iqama)}
                  </p>
                )}
              </div>
            );
          })}
          <div className="rounded-xl p-3 lg:p-4 text-center bg-card border-2 border-border col-span-2 sm:col-span-1">
            <p className="text-sm lg:text-base font-semibold text-foreground mb-1">
              Jumu'ah
            </p>
            <p className="text-base lg:text-xl font-bold text-foreground tabular-nums">
              {jumuahTime}
            </p>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-2">
          Adhan calculated live for Mount Cottrell, VIC (Muslim World League method) — please confirm with the Centre for exact timings.
        </p>
      </div>
    </div>
  );
};

export default Azan;
