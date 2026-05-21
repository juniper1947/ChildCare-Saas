import posthog from 'posthog-js';

export function initPosthog() {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;

  if (!key || typeof window === 'undefined') return;
  posthog.init(key, { api_host: host });
}
