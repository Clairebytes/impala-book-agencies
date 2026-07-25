import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  const { action, details } = await request.json();

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { error } = await supabase.from("activity_log").insert({
    user_id: user.id,
    user_email: user.email,
    action,
    details: details ?? null,
  });

  if (error) {
    console.error("Failed to log activity:", error);
    return NextResponse.json({ error: "Failed to log activity" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
