import { requireSession } from '@/lib/auth/session';

export default async function AdminPage() {
  await requireSession();

  return (
    <main className="container">
      <section className="card">
        <h1 style={{ marginTop: 0 }}>Admin workspace</h1>
        <p className="small">Manage staff access, records, and daily center operations.</p>
      </section>
    </main>
  );
}
