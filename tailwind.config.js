const hexRgb = require("hex-rgb"); // yarn add hex-rgb
const defaultTheme = require("tailwindcss/defaultTheme");

// custom colors:
// https://github.com/tailwindcss/tailwindcss/issues/654#issuecomment-606746700

module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        underline:
          "inset 0 -0.125em 0 0 #000, inset 0 -0.375em 0 0 rgba(165,243,252,.4)",
      },
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    // How to overwrite default class
    // function ({ addUtilities }) {
    //   const extendUnderline = {
    //     ".underline": {
    //       textDecoration: "underline",
    //       textDecorationColor: "red",
    //       lineHeight: 2,
    //     },
    //   };

    //   addUtilities(extendUnderline);
    // },
  ],
};
