import { redirect } from 'vike/abort';
import { getGoogleLoginUrl } from '../../../services/supabase.service.server';
import { type ExtendedContext } from '../../../types';

export async function Page(pageContext: ExtendedContext) {
  const url = await getGoogleLoginUrl(pageContext.serverUrl);
  throw redirect(url, 301);
}
