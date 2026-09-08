"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const router = useRouter();

  async function login(email: string, password: string) {
    setPending(true);
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
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

  async function submit(formData: FormData) {
    await login(
      String(formData.get("email")),
      String(formData.get("password"))
    );
  }

  async function demoLogin() {
    await login(
      "adminlogin123@gmail.com",
      "admin@2026"
    );
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
          disabled={pending}
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
          disabled={pending}
        />
      </label>

      {error && <p className="form-error">{error}</p>}

      <button
        type="submit"
        className="primary-button"
        disabled={pending}
      >
        {pending ? "Signing in..." : "Sign In"}
      </button>

      <div
        style={{
          textAlign: "center",
          margin: "18px 0",
          color: "#777",
          fontSize: "14px",
        }}
      >
        — or —
      </div>

      <button
        type="button"
        onClick={demoLogin}
        disabled={pending}
        style={{
          width: "100%",
          padding: "14px",
          borderRadius: "10px",
          border: "1px solid #d6d6d6",
          background: "transparent",
          color: "#222",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        {pending ? "Logging in..." : "🚀 Demo Login"}
      </button>
    </form>
  );
}
