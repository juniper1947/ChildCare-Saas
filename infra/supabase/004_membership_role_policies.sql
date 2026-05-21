-- Ensure authenticated users can read their own memberships for role routing.

create or replace function current_user_role()
returns app_role
language sql
stable
as $$
  select role
  from user_memberships
  where user_id = auth.uid() and is_active = true
  order by created_at asc
  limit 1;
$$;

drop policy if exists "user can read own memberships" on user_memberships;

create policy "user can read own memberships"
on user_memberships
for select
using (user_id = auth.uid());
