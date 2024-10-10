import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base:'/oraiMunka2024.10.10_2/',
  build:{
    outDir:'docs',
    emptyOutDir:true
  }
})
