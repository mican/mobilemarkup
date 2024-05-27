import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  site: 'https://mobilemarkup.com',
  integrations: [react(), tailwind(), sitemap()],
  renderers: ['@astrojs/renderer-react'],
  vite: {
    css: {
      modules: {
        localsConvention: 'dashes' // Set localsConvention to 'dashes'
      }
    }
  }
})
