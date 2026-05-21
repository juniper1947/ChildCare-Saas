insert into storage.buckets (id, name, public)
values ('documents', 'documents', false)
on conflict (id) do nothing;

create policy "tenant upload documents"
on storage.objects for insert
with check (
  bucket_id = 'documents'
  and split_part(name, '/', 1)::uuid = current_account_id()
);

create policy "tenant read documents"
on storage.objects for select
using (
  bucket_id = 'documents'
  and split_part(name, '/', 1)::uuid = current_account_id()
);
