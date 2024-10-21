/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors : {
      color : {
        primary: '#eeeeee',
        accent: '#ffc639',
        secondary: '#393e46',
        dark: '#222831'
      }
    }
  },
  plugins: [],
}