export const appRoles = ['owner', 'operator', 'admin', 'staff'] as const;

export type AppRole = (typeof appRoles)[number];

export function isAppRole(value: string): value is AppRole {
  return appRoles.includes(value as AppRole);
}

export function defaultRouteForRole(role: AppRole) {
  if (role === 'owner') return '/owner';
  if (role === 'admin') return '/admin';
  return '/dashboard';
}
