// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

/**
 * Application entry point.
 *
 * StrictMode is intentionally kept — it catches common mistakes
 * during development (double-invoking renders, deprecated APIs)
 * without affecting the production build.
 */

const container = document.getElementById('root');

if (!container) {
  throw new Error(
    '[main.jsx] Could not find #root element. ' +
    'Check that index.html contains <div id="root"></div>.'
  );
}

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
);
