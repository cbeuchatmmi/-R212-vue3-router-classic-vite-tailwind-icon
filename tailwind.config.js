const withAnimations = require('animated-tailwindcss');

module.exports = withAnimations({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        // Ici vos couleurs exportées de Figma
      },

      "fontSize": {
        base: "1rem",
        lg: "1.4375rem",
        xl: "1.75rem",
        xxl: "1.8125rem",
        xxxl: "2.375rem",
        xxxxl: "5.0625rem"
      },
      "fontFamily": {
        'PerMarker': ['Permanent Marker', 'cursive'],
        'ASC': ['Amatic SC', 'cursive']


      },
    },
  },
  plugins: [],
});
