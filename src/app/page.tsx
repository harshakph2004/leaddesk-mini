import { LeadForm } from "@/components/lead-form";

export default function Home() {
  return <main><nav className="site-nav"><a className="brand" href="#top">LeadDesk<span>.</span></a><a className="nav-link" href="#contact">Start a project <span>↗</span></a></nav>
    <section id="top" className="hero"><div><p className="eyebrow">Digital products, made practical</p><h1>Good ideas deserve a <em>clear</em> next step.</h1><p className="hero-copy">LeadDesk helps ambitious teams turn early conversations into focused, well-run projects.</p><a className="primary-button inline-button" href="#contact">Tell us about your project <span>↓</span></a></div><aside className="hero-note"><div className="note-dot"/><p>Thoughtful strategy. Useful design. Reliable delivery.</p><span>01 / 03</span></aside></section>
    <section className="services"><p className="eyebrow">What we help with</p><div className="service-grid"><article><span>01</span><h2>Digital strategy</h2><p>Practical direction before you invest in the build.</p></article><article><span>02</span><h2>Web experiences</h2><p>Clear, fast websites that earn attention and action.</p></article><article><span>03</span><h2>Product delivery</h2><p>Focused MVPs built for the next decision, not just launch day.</p></article></div></section>
    <section id="contact" className="contact-section"><LeadForm /></section>
    <footer><span>© {new Date().getFullYear()} LeadDesk Mini</span><a href="https://digitalheroesco.com" target="_blank" rel="noreferrer">Built for Digital Heroes Training Task ↗</a></footer>
  </main>;
}
