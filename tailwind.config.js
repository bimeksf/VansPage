/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      customOrange: "#FF8C38",
      background: "#FBE6CD",
      },
      
    },
  },
  plugins: [],
}