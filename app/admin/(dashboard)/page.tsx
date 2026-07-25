import { createClient } from "@/lib/supabase/server";
import { markOrderFulfilled } from "@/app/admin/actions";

export const dynamic = "force-dynamic";

export default async function AdminOrdersPage() {
  const supabase = await createClient();

  const { data: orders, error } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false });

  const totalOrders = orders?.length ?? 0;
  const newOrders = orders?.filter((order) => order.status === "new").length ?? 0;
  const fulfilledOrders = totalOrders - newOrders;

  return (
    <>
      <h1>Orders</h1>
      <p className="admin-subtitle">Every order submitted through the site, newest first.</p>

      <div className="admin-stats">
        <div className="admin-stat admin-stat--total">
          <span className="admin-stat__value">{totalOrders}</span>
          <span className="admin-stat__label">Total Orders</span>
        </div>
        <div className="admin-stat admin-stat--new">
          <span className="admin-stat__value">{newOrders}</span>
          <span className="admin-stat__label">New</span>
        </div>
        <div className="admin-stat admin-stat--fulfilled">
          <span className="admin-stat__value">{fulfilledOrders}</span>
          <span className="admin-stat__label">Fulfilled</span>
        </div>
      </div>

      <div className="admin-table-wrap">
        <div className="admin-table-header">
          <h2>Recent Orders</h2>
        </div>
        {error ? (
          <p className="admin-empty">Couldn&apos;t load orders: {error.message}</p>
        ) : totalOrders === 0 ? (
          <p className="admin-empty">No orders yet.</p>
        ) : (
          <div className="admin-table-scroll">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Customer</th>
                <th>Phone</th>
                <th>Product</th>
                <th>Qty</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders!.map((order) => (
                <tr key={order.id}>
                  <td>{new Date(order.created_at).toLocaleDateString()}</td>
                  <td>
                    {order.customer_name}
                    <br />
                    <span style={{ color: "#918c84", fontSize: 12 }}>{order.customer_email}</span>
                  </td>
                  <td>{order.phone_number}</td>
                  <td>{order.product || "—"}</td>
                  <td>{order.quantity}</td>
                  <td>
                    <span className={`admin-badge admin-badge--${order.status}`}>
                      {order.status === "fulfilled" ? "Fulfilled" : "New"}
                    </span>
                  </td>
                  <td>
                    {order.status === "new" && (
                      <form action={markOrderFulfilled}>
                        <input type="hidden" name="orderId" value={order.id} />
                        <button type="submit" className="admin-fulfill-btn">
                          Mark Fulfilled
                        </button>
                      </form>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        )}
      </div>
    </>
  );
}
