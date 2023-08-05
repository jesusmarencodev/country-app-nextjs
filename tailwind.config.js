import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: "hsl(207, 26%, 17%)", 
            primary: {
              DEFAULT: "hsl(0, 0%, 100%)",
            },
          },
        },
        light: {
          colors: {
            background: "hsl(0, 0%, 98%)", 
            primary: {
              DEFAULT: "hsl(200, 15%, 8%)",
            },
          },
        },
      },
      
    }),
  ],
}
