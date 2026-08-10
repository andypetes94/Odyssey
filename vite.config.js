import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match the GitHub repo name so assets resolve correctly on GitHub Pages
// (https://andypetes94.github.io/<repo-name>/)
export default defineConfig({
  plugins: [react()],
  base: '/Odyssey/',
})
