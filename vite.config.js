import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    assetsInlineLimit: 0,
  },
  assetsInclude: ['**/*.jpg', '**/*.pdf', '**/*.md'],
})
