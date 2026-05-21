import { redirect } from 'next/navigation';
import type { User } from '@supabase/supabase-js';
import { createSupabaseServerClient } from '@/lib/supabase/server';

export async function requireSession() {
  if (process.env.AUTH_BYPASS_ENABLED === 'true') {
    return {
      id: 'bypass-user',
      email: process.env.AUTH_BYPASS_EMAIL || 'bypass@local.dev'
    } as User;
  }

  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getUser();

  if (!data.user) {
    redirect('/auth/login');
  }

  return data.user;
}
