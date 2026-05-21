import Link from 'next/link';

const plans = [
  {
    name: 'Starter',
    monthly: '$299/mo',
    setup: '$1,500 setup',
    fit: 'Best for single-center childcare businesses getting organized.'
  },
  {
    name: 'Growth',
    monthly: '$599/mo',
    setup: '$3,000 setup',
    fit: 'Best for growing teams that need stronger controls and tracking.'
  },
  {
    name: 'Multi-Site',
    monthly: '$1,200+/mo',
    setup: 'Custom setup',
    fit: 'Best for multi-location operators with advanced workflows.'
  }
];

export default function SalesPage() {
  return (
    <main className="container" style={{ display: 'grid', gap: 18 }}>
      <section className="card" style={{ display: 'grid', gap: 10 }}>
        <p className="small" style={{ margin: 0 }}>Childcare SaaS, not a class platform</p>
        <h1 style={{ margin: 0, lineHeight: 1.1 }}>Simple operations software for childcare owners and teams</h1>
        <p className="small" style={{ margin: 0 }}>
          You handle your center. We handle hosting, billing rails, integrations, updates, and support.
        </p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Link href="/auth/login" className="button primary">Start secure sign-in</Link>
          <Link href="/dashboard" className="button secondary">Open app workspace</Link>
        </div>
      </section>

      <section className="card" style={{ display: 'grid', gap: 12 }}>
        <h2 style={{ margin: 0, fontSize: 24 }}>Pricing model</h2>
        <p className="small" style={{ margin: 0 }}>One-time setup fee plus monthly subscription.</p>
        <div style={{ display: 'grid', gap: 10 }}>
          {plans.map((plan) => (
            <article key={plan.name} style={{ border: '1px solid var(--line)', borderRadius: 10, padding: 12 }}>
              <h3 style={{ margin: 0 }}>{plan.name}</h3>
              <p style={{ margin: '4px 0 0' }}>{plan.monthly} • {plan.setup}</p>
              <p className="small" style={{ margin: '4px 0 0' }}>{plan.fit}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
