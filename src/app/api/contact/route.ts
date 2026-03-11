import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message, intent } = body;

    // Log to console — email/CRM integration coming later
    console.log("=== NEW CONTACT SUBMISSION ===");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone || "Not provided"}`);
    console.log(`Intent: ${intent || "Not specified"}`);
    console.log(`Message: ${message}`);
    console.log(`Timestamp: ${new Date().toISOString()}`);
    console.log("==============================");

    // TODO: Send email via Resend / Postmark
    // TODO: Save to Supabase CRM table

    return NextResponse.json({ success: true, message: "Contact form received" }, { status: 200 });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
