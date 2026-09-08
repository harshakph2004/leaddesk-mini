import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <main className="login-page">
      <a className="brand login-brand" href="/">
        LeadDesk<span>.</span>
      </a>

      <div
        style={{
          maxWidth: 460,
          width: "100%",
          marginBottom: 24,
          padding: 20,
          border: "1px solid #2d2d2d",
          borderRadius: 16,
          background: "#111",
        }}
      >
        <p
          style={{
            color: "#7dd3fc",
            fontWeight: 600,
            marginBottom: 8,
          }}
        >
          🔒 Demo Access
        </p>

        <h3 style={{ marginBottom: 10 }}>
          Recruiter / Admin Login
        </h3>

        <p
          style={{
            color: "#b5b5b5",
            lineHeight: 1.6,
            marginBottom: 16,
          }}
        >
          Use the following demo account to explore the LeadDesk admin dashboard.
        </p>

        <div style={{ marginBottom: 10 }}>
          <strong>Email</strong>
          <br />
          adminlogin123@gmail.com
        </div>

        <div>
          <strong>Password</strong>
          <br />
          admin@2026
        </div>
      </div>

      <LoginForm />
    </main>
  );
}
