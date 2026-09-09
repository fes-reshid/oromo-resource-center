// This app can be deployed at different URL prefixes depending on domain
// (e.g. "/barnoota/oromo-resource-center/" on the project's github.io URL,
// or "/oromo-resource-center/" on a custom domain that drops the repo name).
// Rather than hardcoding one prefix at build time, detect it at runtime by
// locating the app's own folder name in the current URL.
const APP_FOLDER = 'oromo-resource-center';

export function getAppBase(): string {
  const path = window.location.pathname;
  const marker = `/${APP_FOLDER}/`;
  const idx = path.indexOf(marker);
  if (idx !== -1) return path.slice(0, idx + marker.length);
  return '/';
}
