import { requireSession } from '@/lib/auth/session';

export default async function DashboardPage() {
  const user = await requireSession();

  return (
    <main className="container">
      <section className="card" style={{ display: 'grid', gap: 8 }}>
        <h1 style={{ margin: 0 }}>Operations dashboard</h1>
        <p className="small" style={{ margin: 0 }}>
          Signed in as {user.email}. Next: connect center data, billing, and daily workflows.
        </p>
      </section>
    </main>
  );
}
