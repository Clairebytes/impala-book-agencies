"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function markOrderFulfilled(formData: FormData) {
  const orderId = formData.get("orderId");
  if (!orderId || typeof orderId !== "string") return;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const { data: order } = await supabase
    .from("orders")
    .select("customer_name, product")
    .eq("id", orderId)
    .single();

  const { error } = await supabase
    .from("orders")
    .update({ status: "fulfilled", fulfilled_at: new Date().toISOString(), fulfilled_by: user.id })
    .eq("id", orderId);

  if (error) {
    console.error("Failed to mark order fulfilled:", error);
    return;
  }

  await supabase.from("activity_log").insert({
    user_id: user.id,
    user_email: user.email,
    action: "marked_order_fulfilled",
    details: { order_id: orderId, customer_name: order?.customer_name, product: order?.product },
  });

  revalidatePath("/admin");
  revalidatePath("/admin/activity");
}
