// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  base: '/', // Root-relative asset paths: /assets/...

  build: {
    outDir: 'dist',
    emptyOutDir: true,        // Clean dist/ before every build
    sourcemap: false,         // Disable sourcemaps in production
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Split vendor libs into a separate chunk for better caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },

  server: {
    port: 5173,
    strictPort: false,        // Fall back to next available port if 5173 is taken
    open: false,              // Don't auto-open browser on dev start
  },

  preview: {
    port: 4173,               // Port used by `vite preview` (production preview)
    strictPort: false,
  },
})
