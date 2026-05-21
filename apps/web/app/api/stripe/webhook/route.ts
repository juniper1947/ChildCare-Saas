import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { stripe } from '@/lib/billing/stripe';
import { env } from '@/lib/env';

export async function POST(req: Request) {
  const rawBody = await req.text();
  const signature = (await headers()).get('stripe-signature');

  if (!signature || !env.stripeWebhookSecret) {
    return NextResponse.json({ error: 'Missing signature or webhook secret' }, { status: 400 });
  }

  try {
    const event = stripe.webhooks.constructEvent(rawBody, signature, env.stripeWebhookSecret);

    if (event.type === 'checkout.session.completed') {
      // TODO: persist paid setup fee and active subscription for the account.
    }

    if (event.type === 'invoice.payment_failed') {
      // TODO: trigger owner alert and support task.
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 });
  }
}
