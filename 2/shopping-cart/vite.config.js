import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enable global variables (e.g., `describe`, `test`)
    environment: 'jsdom', // Simulate a browser environment
    setupFiles: './src/test/setupTests.js', // Optional: Setup file for global test configurations
    include: ['src/test/**/*.test.{js,jsx}'], // Target files in /test
  },
})
