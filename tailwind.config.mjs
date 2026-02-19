/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3f9',
          100: '#d9e0f0',
          200: '#b3c1e0',
          300: '#8da2d1',
          400: '#6683c1',
          500: '#4064b2',
          600: '#33508e',
          700: '#263c6b',
          800: '#1a2847',
          900: '#0d1424',
        },
        accent: {
          50: '#fef3e6',
          100: '#fde1bf',
          200: '#fbcf99',
          300: '#f9bd72',
          400: '#f7ab4c',
          500: '#f59925',
          600: '#c47a1e',
          700: '#935c16',
          800: '#623d0f',
          900: '#311f07',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
