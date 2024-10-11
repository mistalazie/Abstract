/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jost', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Jost', 'Georgia', 'serif'],
      },
      colors : {
        'solidStone' : "#222222"
      }
    },
  },
  plugins: [],
}
