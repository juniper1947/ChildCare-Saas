import Stripe from 'stripe';
import { env } from '@/lib/env';

export const stripe = new Stripe(env.stripeSecretKey, {
  apiVersion: '2024-06-20'
});

export async function createSubscriptionCheckout(params: {
  customerEmail: string;
  accountId: string;
}) {
  return stripe.checkout.sessions.create({
    mode: 'subscription',
    customer_email: params.customerEmail,
    line_items: [
      { price: env.stripeSetupPriceId, quantity: 1 },
      { price: env.stripeMonthlyPriceId, quantity: 1 }
    ],
    metadata: {
      account_id: params.accountId
    },
    success_url: `${env.baseUrl}/owner?billing=success`,
    cancel_url: `${env.baseUrl}/owner?billing=cancelled`
  });
}
