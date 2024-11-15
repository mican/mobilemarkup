import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

import react from '@astrojs/react'

import sitemap from '@astrojs/sitemap'

import matomo from '@jop-software/astro-matomo'

// https://astro.build/config
export default defineConfig({
  site: 'https://mobilemarkup.com',
  integrations: [
    tailwind(),
    react(),
    sitemap(),
    matomo({
      baseUrl: 'https://lightweb.matomo.cloud/',
      siteId: 2
    })
  ],
  vite: {
    css: {
      modules: {
        localsConvention: 'dashes' // Set localsConvention to 'dashes'
      }
    }
  }
})
