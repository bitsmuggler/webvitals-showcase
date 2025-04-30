import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cls: resolve(__dirname, 'src/cls.html'),
        inp: resolve(__dirname, 'src/inp.html'),
        lcp: resolve(__dirname, 'src/lcp.html')
      },
    },
  },
})