const required = [
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY'
] as const;

for (const key of required) {
  if (!process.env[key]) {
    console.warn(`[env] Missing ${key}`);
  }
}

export const env = {
  appName: process.env.NEXT_PUBLIC_APP_NAME ?? 'Childcare Operations Cloud',
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000',
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
  supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
  supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY ?? '',
  stripeSecretKey: process.env.STRIPE_SECRET_KEY ?? '',
  stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET ?? '',
  stripeSetupPriceId: process.env.STRIPE_PRICE_SETUP_FEE_ID ?? '',
  stripeMonthlyPriceId: process.env.STRIPE_PRICE_MONTHLY_ID ?? '',
  resendApiKey: process.env.RESEND_API_KEY ?? '',
  billingEmailFrom: process.env.BILLING_EMAIL_FROM ?? 'billing@yourdomain.com'
};
