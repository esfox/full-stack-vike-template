import { createClient } from '@supabase/supabase-js';

const projectUrl = process.env.SUPABASE_PROJECT_URL;
const privateKey = process.env.SUPABASE_PRIVATE_KEY;

if (!projectUrl || !privateKey) {
  throw new Error('Incomplete environment variables');
}

export const supabase = createClient(projectUrl, privateKey);

export async function getGoogleLoginUrl(currentBaseUrl: string) {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: new URL('/auth/callback', currentBaseUrl).toString(),
    },
  });

  if (error) {
    throw error;
  }

  return data.url;
}

export async function getUser() {
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    throw error;
  }

  return data;
}
