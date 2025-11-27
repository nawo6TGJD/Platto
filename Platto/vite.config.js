import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Platto/',  // <-- add this line with your GitHub repo name
  plugins: [react()],
})
