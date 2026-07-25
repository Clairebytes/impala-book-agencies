import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone_number, product, quantity } = body;

  if (!name || !email || !phone_number || !quantity) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const supabase = createAdminClient();

  const { error } = await supabase.from("orders").insert({
    customer_name: name,
    customer_email: email,
    phone_number,
    product: product || null,
    quantity: Number(quantity),
  });

  if (error) {
    console.error("Failed to save order:", error);
    return NextResponse.json({ error: "Failed to save order" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
