/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        brand: "#FA7070",
        space: "#FEFDED",
        secondary: "#C6EBC5",
        accent: "#A1C398",
        'orange': '#ff7849',
        'green': '#13ce66',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      extend: {
        backgroundImage: {
          "home-banner": 'url("/src/components/Assets/slide1.jpg")'
        }
      },
    },
    plugins: [
      function ({ addVariant }) {
        addVariant("child", "& > *");
        addVariant("child-hover", "& > *:hover");
      },
    ],
  }