import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // default, you can change if needed
    proxy: {
      '/api': 'http://localhost:4000', // backend running on 4000
    },
    hmr: {
      overlay: false, // optional: disables red error overlay
    },
  },
})
