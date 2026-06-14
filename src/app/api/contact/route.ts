import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas";

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

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Validation failed.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  // Validated lead. In production, forward this to email/CRM (e.g. Resend).
  // For now we log it server-side so the integration point is isolated here.
  console.info("[contact] New enquiry:", {
    ...parsed.data,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({
    ok: true,
    message: "Thanks for reaching out — we'll get back to you within one business day.",
  });
}
