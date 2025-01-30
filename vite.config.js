import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/pk_ka_mart/', // Ensure this matches your GitHub Pages repository name or deployment path
  
  build: {
    // Customize chunking to reduce large bundles
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split node_modules into a separate vendor chunk
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    },
    
    // Increase the chunk size warning limit if desired
    chunkSizeWarningLimit: 1000, // Set this to a higher value like 1000 KB (1 MB)
  }
})
