import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      // 라이브러리가 시작되는 파일 위치
      entry: resolve(__dirname, 'src/index.js'),
      name: 'SmartTermsUI',
      // 빌드 결과물 파일 이름
      fileName: 'index',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      // 설치하는 사람이 이미 가지고 있을 라이브러리는 빌드에서 제외
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
