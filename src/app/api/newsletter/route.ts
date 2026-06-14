import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsed = newsletterSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 422 },
    );
  }

  // In production, forward to a mailing list provider (e.g. Mailchimp/Resend).
  console.info("[newsletter] New subscriber:", parsed.data.email);

  return NextResponse.json({ ok: true });
}
