import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type ActivityDetails = { customer_name?: string; product?: string } | null;

function describeAction(action: string, details: ActivityDetails) {
  switch (action) {
    case "login":
      return "signed in";
    case "marked_order_fulfilled":
      return `marked an order for "${details?.customer_name ?? "a customer"}" as fulfilled`;
    default:
      return action;
  }
}

// Deterministic color per email so the same person always gets the same
// avatar tint, without needing to store anything extra.
const AVATAR_COLORS = ["#b7935f", "#7a8a6f", "#7f6f9e", "#a15c5c", "#5c7f9e"];

function avatarColor(email: string) {
  const hash = Array.from(email).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return AVATAR_COLORS[hash % AVATAR_COLORS.length];
}

export default async function AdminActivityPage() {
  const supabase = await createClient();

  const { data: activity, error } = await supabase
    .from("activity_log")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(200);

  return (
    <>
      <h1>Activity Log</h1>
      <p className="admin-subtitle">Who did what, for accountability across admin accounts.</p>

      <div className="admin-activity-list">
        {error ? (
          <p className="admin-empty">Couldn&apos;t load activity: {error.message}</p>
        ) : !activity || activity.length === 0 ? (
          <p className="admin-empty">No activity recorded yet.</p>
        ) : (
          activity.map((entry) => (
            <div className="admin-activity-row" key={entry.id}>
              <span
                className="admin-activity-avatar"
                style={{ background: avatarColor(entry.user_email) }}
              >
                {entry.user_email.charAt(0).toUpperCase()}
              </span>
              <div className="admin-activity-row__body">
                <span>
                  <strong>{entry.user_email}</strong> {describeAction(entry.action, entry.details)}
                </span>
                <time dateTime={entry.created_at}>{new Date(entry.created_at).toLocaleString()}</time>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
