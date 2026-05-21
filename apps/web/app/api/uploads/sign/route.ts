import { NextResponse } from 'next/server';
import { z } from 'zod';
import { requireSession } from '@/lib/auth/session';
import { createSignedUploadUrl } from '@/lib/storage/uploads';

const payloadSchema = z.object({
  accountId: z.string().uuid(),
  fileName: z.string().min(1),
  category: z.string().min(1)
});

export async function POST(req: Request) {
  await requireSession();
  const payload = payloadSchema.safeParse(await req.json());

  if (!payload.success) {
    return NextResponse.json({ error: 'Invalid request payload' }, { status: 400 });
  }

  const key = `${payload.data.accountId}/${payload.data.category}/${Date.now()}-${payload.data.fileName}`;
  const result = await createSignedUploadUrl(key);

  if (result.error) {
    return NextResponse.json({ error: result.error.message }, { status: 500 });
  }

  return NextResponse.json({ path: key, token: result.data.token, signedUrl: result.data.signedUrl });
}
