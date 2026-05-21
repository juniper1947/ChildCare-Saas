# Childcare SaaS Architecture (v1 Foundation)

## Tenant Model
- A `business_account` is the paying customer.
- Each account can have one or more `centers`.
- Users belong to one account via membership with role.

## Roles
- `owner`: full business access + billing
- `operator`: operations and staff management (no critical billing changes)
- `admin`: center administration and records
- `staff`: daily usage

## Core Domains
- accounts, centers, users, memberships
- children, parents, enrollments, attendance
- invoices/payments/subscriptions
- files/documents
- notes/activity logs

## Product Rule
Simple, warm, premium UX with non-technical copy.
