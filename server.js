// server.js
import express from 'express';
import path    from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const app  = express();
const PORT = process.env.PORT || 3000;

// ── Security headers ──────────────────────────────────────────
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// ── Static assets (dist/) ─────────────────────────────────────
// Cache immutable hashed assets (JS/CSS chunks) for 1 year
app.use(
  '/assets',
  express.static(path.join(__dirname, 'dist', 'assets'), {
    maxAge: '1y',
    immutable: true,
  })
);

// Serve everything else in dist/ with no-cache so index.html
// is always fresh on re-deploy
app.use(
  express.static(path.join(__dirname, 'dist'), {
    maxAge: 0,
    etag: true,
  })
);

// ── SPA fallback — serve index.html for all non-asset routes ──
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// ── Start ─────────────────────────────────────────────────────
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT} — http://localhost:${PORT}`);
});
