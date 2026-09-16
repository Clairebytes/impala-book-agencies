"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });

    if (signInError) {
      setError("Incorrect email or password.");
      setSubmitting(false);
      return;
    }

    await fetch("/api/activity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "login" }),
    });

    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="admin-auth-page">
      <form className="admin-auth-form" onSubmit={handleSubmit}>
        <div className="admin-auth-form__brand">
          <Image src="/images/logo.jpg" alt="The Impala Book Agencies" width={100} height={100} priority />
          <span className="admin-auth-form__eyebrow">The Impala Book Agencies</span>
          <h1>Admin Sign In</h1>
        </div>
        {error && <p className="admin-auth-error">{error}</p>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          autoComplete="username"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          autoComplete="current-password"
        />

        <button type="submit" disabled={submitting}>
          {submitting ? "Signing in…" : "Sign In"}
        </button>
      </form>
    </div>
  );
}
