/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Vindigater'],
        main: ['ClashDisplay-Variable']
      },
      colors: {
        bg: 'var(--bg-color)',
        accent: 'var(--accent-color)',
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        youtube: 'var(--youtube-color)'
      }
    }
  },
  plugins: []
};
