import { getUser } from '../../../services/supabase.service.server';

export async function Page() {
  const user = await getUser();
  console.debug(user);
  return 'hello';
}
