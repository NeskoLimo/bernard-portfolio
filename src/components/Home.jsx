// src/components/Home.jsx
import { useEffect } from 'react';
import Hero      from './Hero';
import About     from './About';
import Skills    from './Skills';
import TechStack from './TechStack';
import Projects  from './Projects';
import Blog      from './Blog';
import Contact   from './Contact';

/**
 * Home
 * ────
 * Root page component. Assembles all sections in order.
 * The Navbar is rendered in App.jsx above this component
 * so it stays fixed across all pages/routes.
 *
 * Section order:
 *   Hero → About → Skills → TechStack → Projects → Blog → Contact
 */
export default function Home() {

  // Scroll-reveal: add .visible to .reveal elements when they enter viewport
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.12 }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main id="home">
      <Hero />
      <About />
      <Skills />
      <TechStack />
      <Projects />
      <Blog />
      <Contact />
    </main>
  );
}

