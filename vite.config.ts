// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 5173,
//     open: true
//   },
//   build: {
//     outDir: 'dist',
//     sourcemap: true
//   }
// })

// Import Vite's configuration helper
import { defineConfig } from 'vite'

// Import the official React plugin for Vite
import react from '@vitejs/plugin-react'

// Export Vite configuration
// https://vitejs.dev/config/
export default defineConfig({
  // Plugins array: here we include React support
  plugins: [react()],

  // Development server configuration
  server: {
    port: 5173, // Port where the dev server will run
    open: true   // Automatically opens the app in the default browser
  },

  // Build configuration
  build: {
    outDir: 'dist',   // Directory where production build files will be generated
    sourcemap: true   // Generate source maps for easier debugging in production
  }
})