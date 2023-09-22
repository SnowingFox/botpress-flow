import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unocss({
      presets: [presetUno(), presetAttributify()],
    }),
  ],
})
