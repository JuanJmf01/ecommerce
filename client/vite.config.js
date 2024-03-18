import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Puerto personalizado
    host: '0.0.0.0', // Escuchar en todas las interfaces de red
  },
});