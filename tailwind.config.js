/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
     
      'xs': '320px',
      // manual screen
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },


    
    extend: {


      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ["Inter", "sans-serif"]
      },

      boxShadow: {
        'custom-white': '0px 1px 237px white',
      },

      dropShadow: {
        'custom-d9d9d9': '0px 0px 27px #D9D9D9',
      },
    },
  },
  plugins: [],
}