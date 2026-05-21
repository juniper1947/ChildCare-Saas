'use client';

import { useState } from 'react';
import { createSupabaseBrowserClient } from '@/lib/supabase/browser';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function handleMagicLink(e: React.FormEvent) {
    e.preventDefault();
    const supabase = createSupabaseBrowserClient();

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/dashboard`
      }
    });

    setMessage(error ? error.message : 'Check your email for your secure sign-in link.');
  }

  return (
    <main className="container">
      <section className="card" style={{ maxWidth: 440, margin: '40px auto', display: 'grid', gap: 12 }}>
        <h1 style={{ margin: 0 }}>Welcome back</h1>
        <p className="small" style={{ margin: 0 }}>Sign in with your work email.</p>
        <form onSubmit={handleMagicLink} style={{ display: 'grid', gap: 10 }}>
          <input
            required
            type="email"
            placeholder="you@center.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: 10, borderRadius: 10, border: '1px solid var(--line)' }}
          />
          <button className="button primary" type="submit">Send sign-in link</button>
        </form>
        {message ? <p className="small" style={{ margin: 0 }}>{message}</p> : null}
      </section>
    </main>
  );
}
