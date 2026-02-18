// src/App.jsx (example)
import Navbar from './components/Navbar';
import Hero from './components/Hero';           // ← This file
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
// ... other imports

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />                           // ← Right here (landing section)
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      {/* ... */}
    </div>
  );
}

export default App;

/**
 * App
 * ───
 * Root application component.
 *
 * Structure:
 *   ├── App.css          — global structural styles
 *   ├── Navbar           — fixed top navigation (outside Home so it
 *   │                      overlays all sections without affecting layout)
 *   ├── Home             — assembles all page sections in order:
 *   │     Hero → About → Experience → Skills → TechStack
 *   │     → Projects → Blog → Contact
 *   └── Background orbs  — fixed decorative depth layers
 *
 * Routing: this portfolio is a single-page app with no client-side
 * routes. All navigation is smooth-scroll to section IDs.
 * If you add pages later (e.g. a blog post view), wrap this in
 * <BrowserRouter> and add <Routes> inside Home.
 */

export default function App() {
  return (
    <div className="App">

      {/* ── Ambient background orbs ─────────────────────────
          Fixed behind all content. Defined in App.css.
          Subtle gold (top-right) + lime (bottom-left) glows
          that add depth to the dark lime-green background.
      ─────────────────────────────────────────────────── */}
      <div className="bg-orb bg-orb-gold" aria-hidden="true" />
      <div className="bg-orb bg-orb-lime" aria-hidden="true" />

      {/* ── Navigation ──────────────────────────────────────
          Fixed header — sits above all sections.
          Renders outside <main> intentionally.
      ─────────────────────────────────────────────────── */}
      <Navbar />

      {/* ── Page content ────────────────────────────────────
          Home renders all sections inside a <main> tag.
          Navbar height is ~64px — sections use scroll-margin
          so anchored links land below the fixed nav.
      ─────────────────────────────────────────────────── */}
      <Home />

    </div>
  );
}
