/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      backgroundColor:{
        mainColor:"#71a133"
      },
      colors:{
        mainColor:"#71a133",
      },
      screens:{
        xs:"300px"
      },
     

    },
  },
  plugins: [],
  darkMode:`class`
}

