import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
<<<<<<< Updated upstream
  base: "/vuePage",
  build: {
    outDir: '../docs'
  },
  resolve: {
    alias: {
      // 모든 경로 설정을 하나의 alias 객체 안에 모았습니다.
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@css': path.resolve(__dirname, 'src/assets/css'),
    }
  }
})
=======
  resolve: {
    alias: {

      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // 'src/assets/css'를 '@css'로 매핑

      '@css': path.resolve(__dirname, 'src/assets/css')
    }
  },
  base:"/vuePage",
  build:{
    outDir: '../docs'
  },
})
>>>>>>> Stashed changes
