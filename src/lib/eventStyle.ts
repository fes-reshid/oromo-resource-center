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

// Real photos cropped from the event flyer itself (not stock images — this
// environment can't fetch from the open internet). Swap any of these for a
// higher-resolution photo via the CMS whenever one's available.
export const ACTIVITY_PHOTOS: Record<string, string> = {
  'Jumping Castle': '/lovable-uploads/activity-jumping-castle.jpg',
  'Chair O Plane': '/lovable-uploads/activity-chair-o-plane.jpg',
  'Fairy Floss': '/lovable-uploads/activity-fairy-floss.jpg',
  'Face Painting': '/lovable-uploads/activity-face-painting.jpg',
  Popcorn: '/lovable-uploads/activity-popcorn.jpg',
};

// A festive diagonal stripe in the site's own brand colors (green/gold/red),
// used as a decorative accent instead of a flat single-tone bar.
export const FESTIVE_STRIPE_CLASS =
  'h-2 w-full bg-[repeating-linear-gradient(45deg,hsl(var(--oromo-accent-red))_0_10px,hsl(var(--secondary))_10px_20px,hsl(var(--primary))_20px_30px)]';

// Pulls the video ID out of any common YouTube URL shape: watch?v=, youtu.be
// short links, /shorts/, and already-an-embed-link /embed/.
function extractYouTubeId(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === 'youtu.be') {
      return parsed.pathname.slice(1) || null;
    }
    if (parsed.hostname.includes('youtube.com')) {
      if (parsed.pathname === '/watch') return parsed.searchParams.get('v');
      const shortsMatch = parsed.pathname.match(/^\/shorts\/([^/?]+)/);
      if (shortsMatch) return shortsMatch[1];
      const embedMatch = parsed.pathname.match(/^\/embed\/([^/?]+)/);
      if (embedMatch) return embedMatch[1];
    }
    return null;
  } catch {
    return null;
  }
}

// Builds the right embed URL for either a YouTube or a Facebook video link,
// so the CMS's single "Video Link" field accepts either kind. A Facebook
// post must be set to Public — its embed shows a blank box (or a login
// prompt) to visitors who aren't logged in otherwise; YouTube has no such
// restriction for public/unlisted videos.
export function getVideoEmbedUrl(videoUrl: string): string {
  const youTubeId = extractYouTubeId(videoUrl);
  if (youTubeId) {
    return `https://www.youtube-nocookie.com/embed/${youTubeId}`;
  }

  const params = new URLSearchParams({
    href: videoUrl,
    show_text: 'false',
  });
  return `https://www.facebook.com/plugins/video.php?${params.toString()}`;
}

// Compact "25 SEP 2026" style date for the flyer's corner ribbon, derived
// from an ISO datetime so it stays correct regardless of how the event's
// display date string is worded.
export function formatRibbonDate(isoDateTime: string): string {
  const date = new Date(isoDateTime);
  return new Intl.DateTimeFormat('en-AU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
    .format(date)
    .toUpperCase();
}
