// Shared festive styling for the ORC Family Day-style event displays
// (Hero slide, Events page, home page card) — keeps the colorful,
// poster-like look consistent everywhere the event content is rendered.

export const ACTIVITY_COLORS: Record<string, string> = {
  'Jumping Castle': 'bg-sky-500 text-white',
  'Chair O Plane': 'bg-violet-500 text-white',
  'Fairy Floss': 'bg-pink-500 text-white',
  'Face Painting': 'bg-orange-500 text-white',
  Popcorn: 'bg-red-500 text-white',
};

export const DEFAULT_ACTIVITY_COLOR = 'bg-primary text-primary-foreground';

// A festive diagonal stripe in the site's own brand colors (green/gold/red),
// used as a decorative accent instead of a flat single-tone bar.
export const FESTIVE_STRIPE_CLASS =
  'h-2 w-full bg-[repeating-linear-gradient(45deg,hsl(var(--oromo-accent-red))_0_10px,hsl(var(--secondary))_10px_20px,hsl(var(--primary))_20px_30px)]';
