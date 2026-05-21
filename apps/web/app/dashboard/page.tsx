import { requireRole } from '@/lib/auth/session';

export default async function DashboardPage() {
  const { user, role } = await requireRole(['operator', 'admin', 'staff']);

  return (
    <main className="container">
      <section className="card" style={{ display: 'grid', gap: 8 }}>
        <h1 style={{ margin: 0 }}>Operations dashboard</h1>
        <p className="small" style={{ margin: 0 }}>
          Signed in as {user.email} ({role}). Next: connect center data, billing, and daily workflows.
        </p>
      </section>
    </main>
  );
}
