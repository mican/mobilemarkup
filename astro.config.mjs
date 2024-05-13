import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  postcss: {
    plugins: []
  },
  plugins: [
    {
      package: '@astrojs/renderer-react'
    }
  ]
})
