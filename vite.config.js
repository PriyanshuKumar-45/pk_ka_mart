import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/pk_ka_mart/',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split vendor libraries into their own chunk
          if (id.includes('node_modules')) {
            return 'vendor'; // This will create a chunk called "vendor.js"
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000,  // Increase chunk size warning limit to 1MB
  }
})
