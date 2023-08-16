/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      'phone': '480px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px'
    },
    fontFamily:{
      sans: ['Roboto', 'sans-serif'],
      serif: ['Roboto Slab', 'serif']
    },
    colors:{
      'black': '#04080f',
      'blue': '#507DBC',
      'lightBlue': '#A1C6EA',
      'gray': '#BBD1EA',
      'white': '#DAE3E5'
    }
  },
  plugins: [],
}

