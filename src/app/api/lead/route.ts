import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, listingId, listingAddress, listingPrice } = body;

    // Log to console — Supabase integration coming later
    console.log("=== NEW LEAD SUBMISSION ===");
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Listing ID: ${listingId}`);
    console.log(`Address: ${listingAddress}`);
    console.log(`Price: $${listingPrice?.toLocaleString()}`);
    console.log(`Timestamp: ${new Date().toISOString()}`);
    console.log("===========================");

    // TODO: Save to Supabase
    // const { error } = await supabase.from("leads").insert({ ... });

    return NextResponse.json({ success: true, message: "Lead received" }, { status: 200 });
  } catch (err) {
    console.error("Lead submission error:", err);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
