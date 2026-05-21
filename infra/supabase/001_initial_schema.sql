-- Childcare SaaS initial schema
create extension if not exists "pgcrypto";

create type app_role as enum ('owner', 'operator', 'admin', 'staff');
create type invoice_status as enum ('draft', 'issued', 'paid', 'failed', 'void');
create type attendance_status as enum ('present', 'absent', 'late', 'excused');

create table if not exists business_accounts (
  id uuid primary key default gen_random_uuid(),
  legal_name text not null,
  display_name text not null,
  billing_email text not null,
  stripe_customer_id text,
  stripe_subscription_id text,
  onboarding_completed boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists centers (
  id uuid primary key default gen_random_uuid(),
  account_id uuid not null references business_accounts(id) on delete cascade,
  name text not null,
  timezone text not null default 'America/New_York',
  address_line_1 text,
  city text,
  region text,
  postal_code text,
  country text default 'US',
  created_at timestamptz not null default now()
);

create table if not exists user_memberships (
  id uuid primary key default gen_random_uuid(),
  account_id uuid not null references business_accounts(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role app_role not null,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  unique (account_id, user_id)
);

create table if not exists center_staff_assignments (
  id uuid primary key default gen_random_uuid(),
  center_id uuid not null references centers(id) on delete cascade,
  membership_id uuid not null references user_memberships(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (center_id, membership_id)
);

create table if not exists parents (
  id uuid primary key default gen_random_uuid(),
  account_id uuid not null references business_accounts(id) on delete cascade,
  first_name text not null,
  last_name text not null,
  email text,
  phone text,
  created_at timestamptz not null default now()
);

create table if not exists children (
  id uuid primary key default gen_random_uuid(),
  account_id uuid not null references business_accounts(id) on delete cascade,
  center_id uuid not null references centers(id) on delete cascade,
  first_name text not null,
  last_name text not null,
  date_of_birth date,
  start_date date,
  status text not null default 'active',
  created_at timestamptz not null default now()
);

create table if not exists child_parent_links (
  id uuid primary key default gen_random_uuid(),
  child_id uuid not null references children(id) on delete cascade,
  parent_id uuid not null references parents(id) on delete cascade,
  relationship text,
  unique (child_id, parent_id)
);

create table if not exists enrollments (
  id uuid primary key default gen_random_uuid(),
  child_id uuid not null references children(id) on delete cascade,
  center_id uuid not null references centers(id) on delete cascade,
  program_name text,
  enrollment_date date not null,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists attendance_records (
  id uuid primary key default gen_random_uuid(),
  center_id uuid not null references centers(id) on delete cascade,
  child_id uuid not null references children(id) on delete cascade,
  attendance_date date not null,
  status attendance_status not null,
  check_in_at timestamptz,
  check_out_at timestamptz,
  notes text,
  unique (child_id, attendance_date)
);

create table if not exists invoices (
  id uuid primary key default gen_random_uuid(),
  account_id uuid not null references business_accounts(id) on delete cascade,
  stripe_invoice_id text,
  amount_cents integer not null,
  currency text not null default 'usd',
  status invoice_status not null default 'draft',
  issued_at timestamptz,
  due_at timestamptz,
  paid_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists payments (
  id uuid primary key default gen_random_uuid(),
  invoice_id uuid not null references invoices(id) on delete cascade,
  stripe_payment_intent_id text,
  amount_cents integer not null,
  currency text not null default 'usd',
  paid_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists documents (
  id uuid primary key default gen_random_uuid(),
  account_id uuid not null references business_accounts(id) on delete cascade,
  center_id uuid references centers(id) on delete set null,
  child_id uuid references children(id) on delete set null,
  file_name text not null,
  file_path text not null,
  content_type text,
  uploaded_by_user_id uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

create table if not exists notes (
  id uuid primary key default gen_random_uuid(),
  account_id uuid not null references business_accounts(id) on delete cascade,
  center_id uuid references centers(id) on delete set null,
  child_id uuid references children(id) on delete set null,
  created_by_user_id uuid references auth.users(id) on delete set null,
  body text not null,
  created_at timestamptz not null default now()
);

create table if not exists activity_logs (
  id uuid primary key default gen_random_uuid(),
  account_id uuid not null references business_accounts(id) on delete cascade,
  actor_user_id uuid references auth.users(id) on delete set null,
  action text not null,
  entity_type text not null,
  entity_id uuid,
  details jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table business_accounts enable row level security;
alter table centers enable row level security;
alter table user_memberships enable row level security;
alter table parents enable row level security;
alter table children enable row level security;
alter table enrollments enable row level security;
alter table attendance_records enable row level security;
alter table invoices enable row level security;
alter table payments enable row level security;
alter table documents enable row level security;
alter table notes enable row level security;
alter table activity_logs enable row level security;

create or replace function current_account_id()
returns uuid
language sql
stable
as $$
  select account_id
  from user_memberships
  where user_id = auth.uid() and is_active = true
  limit 1;
$$;

create policy "tenant read accounts" on business_accounts
for select using (id = current_account_id());

create policy "tenant read write centers" on centers
for all using (account_id = current_account_id()) with check (account_id = current_account_id());
create policy "tenant read write memberships" on user_memberships
for all using (account_id = current_account_id()) with check (account_id = current_account_id());
create policy "tenant read write parents" on parents
for all using (account_id = current_account_id()) with check (account_id = current_account_id());
create policy "tenant read write children" on children
for all using (account_id = current_account_id()) with check (account_id = current_account_id());
create policy "tenant read write invoices" on invoices
for all using (account_id = current_account_id()) with check (account_id = current_account_id());
create policy "tenant read write documents" on documents
for all using (account_id = current_account_id()) with check (account_id = current_account_id());
create policy "tenant read write notes" on notes
for all using (account_id = current_account_id()) with check (account_id = current_account_id());
create policy "tenant read write activity_logs" on activity_logs
for all using (account_id = current_account_id()) with check (account_id = current_account_id());

-- Child tables linked via parent ownership constraints
create policy "tenant read write enrollments" on enrollments
for all using (
  exists (select 1 from centers c where c.id = enrollments.center_id and c.account_id = current_account_id())
) with check (
  exists (select 1 from centers c where c.id = enrollments.center_id and c.account_id = current_account_id())
);

create policy "tenant read write attendance" on attendance_records
for all using (
  exists (select 1 from centers c where c.id = attendance_records.center_id and c.account_id = current_account_id())
) with check (
  exists (select 1 from centers c where c.id = attendance_records.center_id and c.account_id = current_account_id())
);

create policy "tenant read write payments" on payments
for all using (
  exists (
    select 1 from invoices i
    where i.id = payments.invoice_id and i.account_id = current_account_id()
  )
) with check (
  exists (
    select 1 from invoices i
    where i.id = payments.invoice_id and i.account_id = current_account_id()
  )
);
