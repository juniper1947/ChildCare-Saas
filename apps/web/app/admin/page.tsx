import { requireRole } from '@/lib/auth/session';

export default async function AdminPage() {
  await requireRole(['owner', 'admin']);

  return (
    <main className="container">
      <section className="card">
        <h1 style={{ marginTop: 0 }}>Admin workspace</h1>
        <p className="small">Manage staff access, records, and daily center operations.</p>
      </section>
    </main>
  );
}
