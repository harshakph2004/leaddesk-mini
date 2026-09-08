"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const router = useRouter();

  async function submit(formData: FormData) {
    setPending(true);
    setError("");

    const result = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (result?.error) {
      setError("Incorrect email or password.");
      setPending(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  async function demoLogin() {
    setPending(true);
    setError("");

    const result = await signIn("credentials", {
      email: "adminlogin123@gmail.com",
      password: "admin@2026",
      redirect: false,
    });

    if (result?.error) {
      setError("Demo login is currently unavailable.");
      setPending(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <form action={submit} className="login-card">
      <p className="eyebrow">Admin Access</p>

      <h1>Welcome back.</h1>

      <p className="muted">
        Sign in to manage new enquiries.
      </p>

      <label>
        Email
        <input
          name="email"
          type="email"
          required
          placeholder="admin@company.com"
        />
      </label>

      <label>
        Password
        <input
          name="password"
          type="password"
          required
          minLength={8}
          placeholder="••••••••"
        />
      </label>

      {error && <p className="form-error">{error}</p>}

      <button className="primary-button" disabled={pending}>
        {pending ? "Signing in..." : "Sign In"}
      </button>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "20px 0",
          color: "#888",
        }}
      >
        <div style={{ flex: 1, height: "1px", background: "#ddd" }} />
        <span style={{ padding: "0 12px" }}>or</span>
        <div style={{ flex: 1, height: "1px", background: "#ddd" }} />
      </div>

      <button
        type="button"
        onClick={demoLogin}
        disabled={pending}
        style={{
          width: "100%",
          padding: "14px",
          borderRadius: "10px",
          border: "1px solid #dcdcdc",
          background: "white",
          color: "#222",
          fontWeight: 600,
          fontSize: "15px",
          cursor: "pointer",
        }}
      >
        🚀 Demo Login
      </button>
    </form>
  );
}
