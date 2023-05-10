/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    boxShadow: {
      '3xl': '0px 1px 57px -17px rgba(141,234,237,0.86)',
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    rotate: {
      '-180': '-180deg',
       '-90': '-90deg',
      '-45': '-45deg',
       '0': '0',
       '45': '45deg',
       '90': '90deg',
      '135': '135deg',
       '180': '180deg',
      '270': '270deg',
      '360': '360deg',
     },
     brightness: {
      25: '.25',
      600: '6',
    }
  },
  plugins: [],
};


