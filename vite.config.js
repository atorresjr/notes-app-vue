import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents from 'vite-plugin-components'
import Icons, { ViteIconsResolver } from 'vite-plugin-icons'


export default defineConfig({
  resolve: {
    alias: {
      '~/': 'src',
    },
  },
  plugins: [
    vue(),
    ViteComponents({
      customComponentResolvers: ViteIconsResolver({
        componentPrefix: '',
      }),
    }),
    Icons(),
  ],
})