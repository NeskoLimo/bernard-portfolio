// src/components/Home.jsx
import { useEffect, useRef, useState } from 'react';
import About          from './About';
import Experience     from './Experience';
import Skills         from './Skills';
import TechStack      from './TechStack';
import Projects       from './Projects';
import Certifications from './Certifications';
import Blog           from './Blog';
import Contact        from './Contact';

// ── Typing animation roles ────────────────────────────────────
const ROLES = [
  'Business & System Analyst',
  'Agile & Scrum Practitioner',
  'Process Optimizer',
  'Technical Service Lead',
  'Digital Transformation Champion',
];

// ── Floating background fragments ────────────────────────────
const FLOATERS = [
  { text: 'SELECT * FROM insights',  top: '18%', left: '4%',  size: '0.72rem', delay: '0s',   dur: '18s' },
  { text: 'requirements.analyze()',  top: '72%', left: '3%',  size: '0.68rem', delay: '2s',   dur: '22s' },
  { text: 'UAT -> PASS',             top: '38%', left: '88%', size: '0.7rem',  delay: '1s',   dur: '20s' },
  { text: 'stakeholders.align()',    top: '80%', left: '82%', size: '0.68rem', delay: '3.5s', dur: '24s' },
  { text: 'KPI: +34% efficiency',    top: '12%', left: '76%', size: '0.7rem',  delay: '0.5s', dur: '19s' },
  { text: 'process.optimize()',      top: '58%', left: '91%', size: '0.65rem', delay: '4s',   dur: '21s' },
  { text: 'GROUP BY insights',       top: '88%', left: '44%', size: '0.68rem', delay: '2.5s', dur: '23s' },
  { text: 'Agile | Scrum | Kanban',  top: '6%',  left: '38%', size: '0.7rem',  delay: '1.5s', dur: '20s' },
];

// ── Floating monogram cards ───────────────────────────────────
const MONOGRAMS = [
  { label: 'BA',  top: '62%', left: '6%',  color: 'var(--gold)',      delay: '0s'   },
  { label: 'AI',  top: '28%', left: '91%', color: 'var(--lime-main)', delay: '1.2s' },
  { label: 'SQL', top: '78%', left: '72%', color: 'var(--gold-deep)', delay: '2.4s' },
];

// ── Typing hook ───────────────────────────────────────────────
function useTypingEffect(words, typingSpeed = 80, deletingSpeed = 40, pause = 1800) {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase]         = useState('typing');

  useEffect(() => {
    const word = words[wordIndex];
    let timeout;
    if (phase === 'typing') {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), typingSpeed);
      } else {
        timeout = setTimeout(() => setPhase('deleting'), pause);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), deletingSpeed);
      } else {
        setWordIndex((i) => (i + 1) % words.length);
        setPhase('typing');
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, phase, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return displayed;
}

// ── Hero Section ──────────────────────────────────────────────
function Hero() {
  const heroRef   = useRef(null);
  const typedRole = useTypingEffect(ROLES);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth  - 0.5) * 24;
      const y = (e.clientY / window.innerHeight - 0.5) * 24;
      el.style.setProperty('--mx', `${x}px`);
      el.style.setProperty('--my', `${y}px`);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const fade = (delay) => ({
    opacity:    loaded ? 1 : 0,
    transform:  loaded ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  });

  return (
    <section
      id="home"
      ref={heroRef}
      style={{
        minHeight: '100vh', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        background: 'var(--bg-base)', position: 'relative',
        overflow: 'hidden', padding: '6rem 1.5rem 4rem',
      }}
    >
      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(247,231,206,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(247,231,206,0.025) 1px, transparent 1px)`,
        backgroundSize: '72px 72px',
      }} />

      {/* Ambient orbs */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-8%',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(247,231,206,0.07) 0%, transparent 65%)',
