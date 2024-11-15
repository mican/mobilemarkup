import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

import react from '@astrojs/react'

import sitemap from '@astrojs/sitemap'

import matomo from 'astro-matomo'

// https://astro.build/config
export default defineConfig({
  site: 'https://mobilemarkup.com',
  integrations: [
    tailwind(),
    react(),
    sitemap(),
    matomo({
      enabled: import.meta.env.PROD, // Only load in production
      host: 'https://lightweb.matomo.cloud/',
      trackerUrl: 'js/', // defaults to matomo.php
      srcUrl: 'js/', // defaults to matomo.js
      siteId: 2,
      heartBeatTimer: 5,
      disableCookies: true,
      debug: true
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
