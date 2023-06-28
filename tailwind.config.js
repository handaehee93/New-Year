/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        logo: '#10469e',
      },
      backgroundImage: {
        banner: `url('../public/images/banner.jpg')`
      },
      screens: {
        'sm': '600px',
        // => @media (min-width: 576px) { ... }
  
        'md': '960px',
        // => @media (min-width: 960px) { ... }
  
        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      }
    },
  },
  plugins: [],
}

