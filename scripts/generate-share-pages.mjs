// GitHub Pages can't run server-side rewrites, so directly requesting a
// client-side route (e.g. /events) 404s and falls back to /404.html — a
// bare redirect script with no <meta> tags. Real HTTP 404s with no Open
// Graph data are exactly why link-preview crawlers (WhatsApp, iMessage,
// Facebook, etc.) show no icon/thumbnail when someone shares a deep link.
//
// This script runs after `vite build` and writes a real, 200-status
// dist/<route>/index.html for every app route: a copy of the built
// index.html (with its relative asset paths adjusted one level deeper)
// so crawlers get valid <meta> tags immediately, while real visitors still
// get the exact same SPA — React Router takes over from there as normal.
// Routes with route-specific content (currently just the ORC Family Day
// event) get their own tailored title/description/image.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const distDir = path.join(rootDir, 'dist');
const distIndexPath = path.join(distDir, 'index.html');

const eventsContent = JSON.parse(
  readFileSync(path.join(rootDir, 'src/content/upcoming-events.json'), 'utf8'),
);
const featuredEvent = eventsContent.events[0];

const SITE_URL = 'https://oromorc.org';

const ROUTES = [
  '/enrollment',
  '/funeral-services',
  '/venue-booking',
  '/membership',
  '/community-services',
  '/volunteer',
  '/gallery',
  '/services',
  '/school',
  '/spiritual-services',
  '/events',
  '/donate',
  '/azan',
];

const OVERRIDES = featuredEvent
  ? {
      '/events': {
        title: `${featuredEvent.title} | Oromo Resource Centre Inc`,
        description: `${featuredEvent.tagline} ${featuredEvent.date}, ${featuredEvent.time} at ${featuredEvent.location}.`,
        image: featuredEvent.posterImage ? `${SITE_URL}${featuredEvent.posterImage}` : undefined,
      },
    }
  : {};

function replaceMetaContent(html, property, newContent) {
  const attr = property.startsWith('og:') || property.startsWith('twitter:') ? 'property|name' : 'name';
  const pattern = new RegExp(
    `(<meta\\s+(?:property|name)="${property}"\\s+content=")[^"]*("\\s*/?>)`,
  );
  return html.replace(pattern, `$1${newContent}$2`);
}

function replaceTitle(html, newTitle) {
  return html.replace(/<title>[^<]*<\/title>/, `<title>${newTitle}</title>`);
}

let indexHtml;
try {
  indexHtml = readFileSync(distIndexPath, 'utf8');
} catch {
  console.error('dist/index.html not found — run `vite build` first.');
  process.exit(1);
}

// One level deeper than dist/index.html, so relative asset paths need an
// extra "../" — covers both `./assets/...` and the bare `favicon.ico` /
// `icons/...` references.
const deepened = indexHtml
  .replace(/((?:src|href)=")\.\//g, '$1../')
  .replace(/(href=")favicon\.ico"/g, '$1../favicon.ico"')
  .replace(/(href=")icons\//g, '$1../icons/');

for (const route of ROUTES) {
  let html = deepened;
  const override = OVERRIDES[route];
  if (override) {
    if (override.title) {
      html = replaceTitle(html, override.title);
      html = replaceMetaContent(html, 'og:title', override.title);
    }
    if (override.description) {
      html = replaceMetaContent(html, 'description', override.description);
      html = replaceMetaContent(html, 'og:description', override.description);
    }
    if (override.image) {
      html = replaceMetaContent(html, 'og:image', override.image);
      html = replaceMetaContent(html, 'twitter:image', override.image);
    }
  }

  const outDir = path.join(distDir, route.replace(/^\//, ''));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(path.join(outDir, 'index.html'), html);
}

console.log(`Generated ${ROUTES.length} share-preview pages in dist/`);
