
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },
      boxShadow: {
        btn: "6px 6px 0 0 rgba(225, 194, 42)",
        "btn-sm": "4px 4px 0 0 rgba(86, 188, 108)",
        "r": "2px 0 4px 0 rgba(0, 0, 0, 0.04)",
        "center": "0 0 16px 0 rgba(0, 0, 0, 0.075)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Poppins Slab", "serif"],
        body: ["Poppins", "sans-serif"],
        SFpro: ["var(--font-SFpro)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        base: {
          '50': '#eceff1',
          '100': '#cfd8dc',
          '200': '#b0bec5',
          '300': '#8e939f',
          '400': '#78909c',
          '500': '#607d8b',
          '600': '#546e7a',
          '700': '#455a64',
          '800': '#37474f',
          '900': '#263238',
        },
        brown: {
          '100': '#a39c8c',
          '200': '#938c79',
          '300': '#847b65',
          '400': '#746b52',
          '500': '#655a3f',
          '600': '#5B5139',
          '700': '#514832',
          '800': '#473f2c',
          '900': '#3d3626',
        },
        amber: {
          '100': '#EDDA7F',
          '200': '#EAD46A',
          '300': '#E7CE55',
          '400': '#E4C83F',
          '500': '#e1c22a',
          '600': '#CBAF26',
          '700': '#B49B22',
          '800': '#9E881D',
          '900': '#877419',
        },
        primary: {
          '100': '#EDDA7F',
          '200': '#EAD46A',
          '300': '#E7CE55',
          '400': '#E4C83F',
          '500': '#e1c22a',
          '600': '#CBAF26',
          '700': '#B49B22',
          '800': '#9E881D',
          '900': '#877419',
        },
      }
    },
  },
  plugins: [],
});