import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { defaultRouteForRole, isAppRole } from '@/lib/auth/roles';

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const next = requestUrl.searchParams.get('next') ?? '/dashboard';
  let redirectTarget = next;

  if (code) {
    const cookieStore = await cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || '',
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value;
          },
          set(name: string, value: string, options: CookieOptions) {
            cookieStore.set({ name, value, ...options });
          },
          remove(name: string, options: CookieOptions) {
            cookieStore.set({ name, value: '', ...options });
          }
        }
      }
    );

    await supabase.auth.exchangeCodeForSession(code);

    const { data: currentUser } = await supabase.auth.getUser();
    if (currentUser.user) {
      const { data: membership } = await supabase
        .from('user_memberships')
        .select('role')
        .eq('user_id', currentUser.user.id)
        .eq('is_active', true)
        .order('created_at', { ascending: true })
        .limit(1)
        .maybeSingle();

      if (membership?.role && isAppRole(membership.role)) {
        redirectTarget = defaultRouteForRole(membership.role);
      }
    }
  }

  return NextResponse.redirect(new URL(redirectTarget, requestUrl.origin));
}
