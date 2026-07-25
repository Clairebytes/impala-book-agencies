import Link from "next/link";
import SignOutButton from "@/components/admin/SignOutButton";

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="admin-topbar">
        <span className="admin-topbar__brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.jpg" alt="" />
          Impala Admin
        </span>
        <nav className="admin-topbar__nav">
          <Link href="/admin">Orders</Link>
          <Link href="/admin/activity">Activity Log</Link>
        </nav>
        <SignOutButton />
      </header>
      <main className="admin-main">{children}</main>
    </>
  );
}
