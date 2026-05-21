import { redirect } from 'next/navigation';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { defaultRouteForRole, isAppRole, type AppRole } from '@/lib/auth/roles';

export async function requireSession() {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getUser();

  if (!data.user) {
    redirect('/auth/login');
  }

  return data.user;
}

export async function getCurrentUserRole() {
  const user = await requireSession();
  const supabase = await createSupabaseServerClient();
  const { data: membership } = await supabase
    .from('user_memberships')
    .select('role')
    .eq('user_id', user.id)
    .eq('is_active', true)
    .order('created_at', { ascending: true })
    .limit(1)
    .maybeSingle();

  if (!membership?.role || !isAppRole(membership.role)) {
    return null;
  }

  return membership.role;
}

export async function requireRole(allowedRoles: AppRole[]) {
  const user = await requireSession();
  const role = await getCurrentUserRole();

  if (!role) {
    redirect('/auth/login');
  }

  if (!allowedRoles.includes(role)) {
    redirect(defaultRouteForRole(role));
  }

  return { user, role };
}
