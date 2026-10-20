// Logs form submissions into a private Google Sheet (one tab per form) so
// admin staff can browse them in table form, in addition to the email that
// Web3Forms already sends. This is best-effort only and never throws or
// blocks the submit flow — the email remains the source of truth, so a
// failed sheet write just means one row is missing, not a lost submission.
//
// To enable: create a Google Sheet, open Extensions -> Apps Script, paste
// in scripts/google-sheets-form-log.gs, then Deploy -> New deployment ->
// Web app (Execute as: Me, Who has access: Anyone), and paste the resulting
// URL below. Leave blank to disable sheet logging entirely.
const SHEET_LOG_URL = '';

export async function logSubmissionToSheet(
  formType: string,
  fields: Record<string, string | null | undefined>,
): Promise<void> {
  if (!SHEET_LOG_URL) return;
  try {
    await fetch(SHEET_LOG_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ formType, fields }),
    });
  } catch {
    // Best-effort only — see note above.
  }
}
