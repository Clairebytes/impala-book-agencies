-- Run this once in the Supabase project's SQL Editor.
-- Orders placed through the site, plus an audit trail of admin activity.

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  customer_name text not null,
  customer_email text not null,
  phone_number text not null,
  product text not null,
  quantity integer not null,
  status text not null default 'new' check (status in ('new', 'fulfilled')),
  fulfilled_at timestamptz,
  fulfilled_by uuid references auth.users(id)
);

create table if not exists activity_log (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  user_id uuid references auth.users(id) not null,
  user_email text not null,
  action text not null,
  details jsonb
);

alter table orders enable row level security;
alter table activity_log enable row level security;

-- Orders are inserted by the order-form API route using the service-role
-- key, which bypasses RLS entirely — so there is deliberately no insert
-- policy here for the anon/authenticated roles. Only signed-in admins can
-- read or update orders.
create policy "Admins can view orders"
  on orders for select
  to authenticated
  using (true);

create policy "Admins can update orders"
  on orders for update
  to authenticated
  using (true);

-- Every signed-in admin can see the full activity log (that's the point —
-- shared visibility into who did what), but can only write entries under
-- their own identity.
create policy "Admins can view activity log"
  on activity_log for select
  to authenticated
  using (true);

create policy "Admins can log their own activity"
  on activity_log for insert
  to authenticated
  with check (auth.uid() = user_id);
