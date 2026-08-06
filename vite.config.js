import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Shoaib-Portfolio-V2/', // <-- Add this line right here  plugins: [react()],
  server: {
    host: true,
    port: 5173
  }
})
