// Builds a Google Calendar "quick add" link for an event given local wall-clock
// ISO datetimes (no timezone suffix) plus an IANA zone Google resolves them in.
export function googleCalendarUrl(
  title: string,
  startDateTime: string,
  endDateTime: string,
  location: string,
  details: string,
  timezone = 'Australia/Melbourne',
): string {
  const toCompact = (iso: string) => iso.replace(/[-:]/g, '');
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${toCompact(startDateTime)}/${toCompact(endDateTime)}`,
    ctz: timezone,
    location,
    details,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
