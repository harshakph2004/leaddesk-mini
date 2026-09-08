import { LeadForm } from "@/components/lead-form";

export default function Home() {
  return (
    <main>
      <nav className="site-nav">
        <a className="brand" href="#top">
          LeadDesk<span>.</span>
        </a>

        <a className="nav-link" href="/login">
          Admin Login <span>↗</span>
        </a>
      </nav>

      {/* Recruiter Demo Card */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "40px auto 0",
          padding: "24px",
          border: "1px solid #2d2d2d",
          borderRadius: "18px",
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
          🔒 Recruiter / Admin Access
        </p>

        <h2 style={{ marginBottom: 12 }}>
          Explore the Admin Dashboard
        </h2>

        <p
          style={{
            color: "#b5b5b5",
            lineHeight: 1.7,
            marginBottom: 20,
          }}
        >
          Use the demo account below to access the LeadDesk dashboard and
          explore lead management features without creating an account.
        </p>

        <div
          style={{
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
            marginBottom: "22px",
          }}
        >
          <div>
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

        <a className="primary-button" href="/login">
          Login to Dashboard →
        </a>
      </section>

      <section id="top" className="hero">
        <div>
          <p className="eyebrow">Smart Lead Management</p>

          <h1>
            Capture, organize, and manage <em>customer leads</em> effortlessly.
          </h1>

          <p className="hero-copy">
            LeadDesk helps businesses collect enquiries, track lead progress,
            and manage customer interactions through a secure admin dashboard.
          </p>

          <a className="primary-button inline-button" href="#contact">
            Get Started <span>↓</span>
          </a>
        </div>

        <aside className="hero-note">
          <div className="note-dot" />
          <p>Secure. Organized. Easy to manage.</p>
          <span>01 / 03</span>
        </aside>
      </section>

      <section className="services">
        <p className="eyebrow">Features</p>

        <div className="service-grid">
          <article>
            <span>01</span>
            <h2>Lead Collection</h2>
            <p>
              Capture customer enquiries through a simple public contact form.
            </p>
          </article>

          <article>
            <span>02</span>
            <h2>Lead Management</h2>
            <p>
              Review, search, and update lead status from a secure admin
              dashboard.
            </p>
          </article>

          <article>
            <span>03</span>
            <h2>Secure Access</h2>
            <p>
              Protected authentication with role-based access for administrators.
            </p>
          </article>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <LeadForm />
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Harsha Hiremath</span>
      </footer>
    </main>
  );
}
