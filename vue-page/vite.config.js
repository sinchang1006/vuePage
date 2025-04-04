import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base:"/vuePage",
  build:{
    outDir: '../docs'
  },
  resolve: {
    alias: {
      // 'src/assets/css'를 '@css'로 매핑
      '@css': path.resolve(__dirname, 'src/assets/css'),

      // '@'를 'src'로 매핑
      '@': path.resolve(__dirname, 'src')
    }
  }
})
