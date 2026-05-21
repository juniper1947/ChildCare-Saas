# Stripe Setup

Products/prices required:
- Setup Fee (one-time)
- Monthly Subscription

Environment variables:
- `STRIPE_PRICE_SETUP_FEE_ID`
- `STRIPE_PRICE_MONTHLY_ID`

Webhook endpoint:
- `/api/stripe/webhook`

Events to process first:
- `checkout.session.completed`
- `invoice.paid`
- `invoice.payment_failed`
- `customer.subscription.updated`
- `customer.subscription.deleted`
