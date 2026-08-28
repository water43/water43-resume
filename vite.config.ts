import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/water43-resume/',
  server: {
    port: 3000,
    host: true
  }
})
