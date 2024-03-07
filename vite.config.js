import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [],
  css: {
    postcss: {
      plugins: [require('postcss-nested'), require('autoprefixer')]
    },
  },
});