import { createClient } from "@supabase/supabase-js";

// Service-role client: bypasses row-level security entirely. Server-only —
// never import this from a Client Component or expose the key to the
// browser. Used solely by the order-form API route to insert new orders
// without granting the public anon key any write access to the table.
export function createAdminClient() {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    auth: { persistSession: false },
  });
}
