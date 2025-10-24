import tailwindcss from '@tailwindcss/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const src = fileURLToPath(new URL('./src', import.meta.url))

export default defineConfig(
  {
    build: {
      cssCodeSplit: true,
      lib: {
        entry: 'src/index.ts',
        fileName: 'index',
        formats: ['es']
      },
      minify: false,
      rollupOptions: {
        external: ['vue'],
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) return 'vendor'
            // return `${parse(id).dir.slice(src.length + 1)}/${parse(id).name}`
          }
        }
      }
    },
    plugins: [vueJsx(), tailwindcss(), dts({ include: ['utils.d.ts', 'src'] })],
    resolve: { alias: { '@': src } }
  }
)
