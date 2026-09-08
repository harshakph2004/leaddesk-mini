import { LeadForm } from "@/components/lead-form";

export default function Home() {
  return (
    <main>
      <nav className="site-nav">
        <a className="brand" href="#top">
          LeadDesk<span>.</span>
        </a>
        <a className="nav-link" href="#contact">
          Start a Project <span>↗</span>
        </a>
      </nav>

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
            <p>Capture customer enquiries through a simple public contact form.</p>
          </article>

          <article>
            <span>02</span>
            <h2>Lead Management</h2>
            <p>Review, search, and update lead status from a secure admin dashboard.</p>
          </article>

          <article>
            <span>03</span>
            <h2>Secure Access</h2>
            <p>Protected authentication with role-based access for administrators.</p>
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
