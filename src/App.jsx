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
