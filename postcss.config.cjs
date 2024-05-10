module.exports = {
  plugins: [
    require('postcss-sass')({
      /* Your options for postcss-sass parser */
    }),
    require('tailwindcss')()
    // Other PostCSS plugins if any
  ]
}
