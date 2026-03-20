/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        olive: { DEFAULT: '#3E4F3C', light: '#5A6B55', pale: '#8A9A82' },
        cream: { DEFAULT: '#F7F4EF', dark: '#EDE9E1' },
        lime: { DEFAULT: '#B8D84E', dark: '#95B23D' },
        earthy: { DEFAULT: '#3A3A3A', muted: '#8A8A7A', light: '#B0AFA5' },
      },
      fontFamily: { sans: ['DM Sans', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
}
