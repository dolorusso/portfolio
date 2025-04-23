/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          black: '#000000',
          gray: {
            800: '#333333',
            400: '#999999',
          },
        },
        fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };