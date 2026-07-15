/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        bg: '#0f1419',
        primary: '#0ea5e9',
        secondary: '#10b981',
        text: '#ffffff',
        textmuted: '#d1d5db',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      screens: {
        tab: '900px',
      },
    },
  },
  plugins: [],
}
