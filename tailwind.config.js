/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      animation: {
        flip: 'flip 5s infinite ease-in-out',
      },
      keyframes: {
        flip: {
          '0%': {
            transform: 'rotateY(0deg)',
          },

          '50%': {
            transform: 'rotateY(180deg)',
          },

          '100%': {
            transform: 'rotateY(0deg)',
          },
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        open: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar-hide'),
  ],
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: false,
  },
}
