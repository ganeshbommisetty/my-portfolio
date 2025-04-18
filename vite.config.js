import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// the base will take the appropriate path when it run in github page and in local
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/my-portfolio/' : '/',
  plugins: [react()],
})
