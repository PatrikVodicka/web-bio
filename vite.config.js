import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import vueJsx from '@vitejs/plugin-vue-jsx'

const sourcePath = fileURLToPath(new URL('./src', import.meta.url))

export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
    vueJsx()
  ],
  resolve: {
    alias: {
      '@': sourcePath
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "bootstrap/scss/functions";
          @import "bootstrap/scss/variables";
          @import "./src/assets/scss/variables";
          @import "./src/assets/scss/animations";
          @import "bootstrap/scss/maps";
          @import "bootstrap/scss/mixins";
          @import "bootstrap/scss/vendor/rfs";
          @import "bootstrap/scss/root";
          @import "bootstrap/scss/containers";
          @import "bootstrap/scss/grid";
          @import "bootstrap/scss/utilities";
          @import "bootstrap/scss/utilities/api";
          @import "./src/assets/scss/scrollbar";
        `
      },
    },
  },
})
