import Link from 'next/link';

const valuePoints = [
  'One secure place for child records, staff, attendance, billing, and files',
  'Simple daily workflows for non-technical center teams',
  'Owner-level visibility across centers, payments, and operations'
];

export default function HomePage() {
  return (
    <main className="container" style={{ display: 'grid', gap: 18 }}>
      <section className="card" style={{ display: 'grid', gap: 12, padding: 28 }}>
        <p className="small" style={{ margin: 0 }}>Built for childcare owners, operators, and CEOs</p>
        <h1 style={{ margin: 0, lineHeight: 1.1 }}>Run your childcare center with less stress and more control.</h1>
        <p className="small" style={{ margin: 0, maxWidth: 720 }}>
          Childcare Operations Cloud helps your team stay organized every day while you keep clear control of records, billing, and growth.
        </p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Link className="button primary" href="/auth/login">Sign in</Link>
          <Link className="button secondary" href="/sales">View product overview</Link>
        </div>
      </section>

      <section className="card" style={{ display: 'grid', gap: 10 }}>
        <h2 style={{ margin: 0, fontSize: 24 }}>What this platform handles</h2>
        <div style={{ display: 'grid', gap: 10 }}>
          {valuePoints.map((point) => (
            <div key={point} style={{ border: '1px solid var(--line)', borderRadius: 10, padding: 12 }}>
              <p style={{ margin: 0 }}>{point}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
