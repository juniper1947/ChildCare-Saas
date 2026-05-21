export const APP_ROLES = ['owner', 'operator', 'admin', 'staff'] as const;
export type AppRole = (typeof APP_ROLES)[number];
