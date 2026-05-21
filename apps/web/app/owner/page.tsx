import { requireRole } from '@/lib/auth/session';

export default async function OwnerPage() {
  await requireRole(['owner']);

  return (
    <main className="container">
      <section className="card">
        <h1 style={{ marginTop: 0 }}>Owner control center</h1>
        <p className="small">Track subscriptions, centers, and leadership-level metrics.</p>
      </section>
    </main>
  );
}
