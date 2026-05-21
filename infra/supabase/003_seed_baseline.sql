-- Baseline seed for local/dev onboarding.
-- Update the email values below to real auth.users emails in your Supabase project.

with account_insert as (
  insert into business_accounts (legal_name, display_name, billing_email, onboarding_completed)
  values ('Elite Childcare LLC', 'Elite Children', 'junniferross.uy@gmail.com', true)
  returning id
),
center_insert as (
  insert into centers (account_id, name, timezone, city, region, country)
  select id, 'Main Center', 'America/New_York', 'New York', 'NY', 'US'
  from account_insert
  returning id, account_id
)
insert into user_memberships (account_id, user_id, role, is_active)
select
  c.account_id,
  u.id,
  seed.role::app_role,
  true
from center_insert c
join (
  values
    ('junniferross.uy@gmail.com', 'owner'),
    ('JRAdmin@eliteschildren.com', 'admin'),
    ('junnifer.uy@gmail.com', 'operator'),
    ('Koneuy@gmail.com', 'staff')
) as seed(email, role) on true
join auth.users u on lower(u.email) = lower(seed.email)
on conflict (account_id, user_id) do update
set role = excluded.role, is_active = true;
