// Web3Forms access keys are meant to be used directly from the browser —
// unlike a typical API secret, this is safe to commit; Web3Forms uses the
// key only to route submissions to the destination email it was created
// for. Get one free at https://web3forms.com (no account needed).
export const WEB3FORMS_ACCESS_KEY = '7e1ccb5c-a436-48d3-bff8-060fca32b195';

// Also copied on every submission, regardless of which inbox the access
// key above was created against.
const CC_EMAIL = 'fesbackups@gmail.com';

export async function submitToWeb3Forms(
  subject: string,
  fields: Record<string, string | null | undefined>,
): Promise<void> {
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject,
      from_name: 'Oromo Resource Centre website',
      cc: CC_EMAIL,
      ...fields,
    }),
  });

  const result = await response.json();
  if (!result.success) {
    throw new Error(result.message || 'Submission failed');
  }
}
