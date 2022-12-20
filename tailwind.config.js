// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/templates/**/*.twig', './src/js/**/*.{js,ts}'],
  safelist: ['bg-secondary', 'bg-emphasis', 'bg-red', 'bg-purple'],
  theme: {
    fontFamily: {
      sans: ["'Public Sans'", 'sans-serif']
    },
    screens: {
      xs: '390px',
      sm: defaultTheme.screens['sm'],
      md: defaultTheme.screens['md'],
      lg: defaultTheme.screens['lg'],
      narrow: '1194px',
      xl: defaultTheme.screens['xl'],
      navxl: '1380px',
      desktop: '1440px',
      '2xl': defaultTheme.screens['2xl']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      secondary: '#26874B',
      emphasis: '#F7A341',
      purple: '#8F278D',
      red: '#FF0000',
      blue: {
        100: '#F3F7FA',
        300: '#A8D9FF',
        500: '#5FADE8',
        700: '#075FA2',
        900: '#043459'
      },
      gray: {
        50: '#F8F8F8',
        100: '#EDF1F6',
        300: '#C1CFDE',
        400: '#C1CFDE',
        500: '#92A0AE',
        700: '#44505C',
        900: '#020304'
      }
    },
    extend: {
      brightness: {
        60: '.60',
      },
      boxShadow: {
        'nav-menu': '0 15px 12px 0 rgb(0 0 0 / 0.05);',
        biggie: '0 10px 70px 0 rgb(0 0 0 / 0.04);'
      },
      backgroundImage: {
        'dots-pattern': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 90 90'%3E%3Cpath fill='%23C1CFDE' d='M0 87.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm0-17a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm0-17a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm0-17a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm0-17a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm0-17a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm17 85a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm0-34a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm0 17a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm0-34a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm0-17a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm0-17a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm17 51a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm0 34a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm0-17a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm17-17a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm-17-17a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm0-17a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm0-17a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm17 85a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm17-34a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm-17 17a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm0-34a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm0-17a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm0-17a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm34 51a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm-17 34a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm0-17a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm0-34a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm0-17a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm0-17a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm17 85a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm0-17a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm0-34a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm0-17a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm0-17a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z'/%3E%3C/svg%3E")`,
        'li-check': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 48 48'%3E%3Cpath fill='%2326874B' d='M24 .75a23.25 23.25 0 1 0 0 46.5 23.25 23.25 0 0 0 0-46.5Zm0 43.5a20.25 20.25 0 1 1 0-40.5 20.25 20.25 0 0 1 0 40.5Zm13.28-25.78L20.36 35.26c-.44.43-1.16.43-1.6-.01l-8.04-8.12a1.13 1.13 0 0 1 0-1.59l.8-.79a1.13 1.13 0 0 1 1.6 0l6.46 6.53 15.32-15.2a1.12 1.12 0 0 1 1.6 0l.78.8c.44.44.44 1.15 0 1.6Z'/%3E%3C/svg%3E")`
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    plugin(function ({ addVariant }) {
      addVariant('href', ['&[href]'])
    })
  ]
}
