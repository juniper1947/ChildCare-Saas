import type { AppRole } from '@/types/roles';

const roleRank: Record<AppRole, number> = {
  owner: 4,
  operator: 3,
  admin: 2,
  staff: 1
};

export function hasMinimumRole(current: AppRole, minimum: AppRole) {
  return roleRank[current] >= roleRank[minimum];
}
