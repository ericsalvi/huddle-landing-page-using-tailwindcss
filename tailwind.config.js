/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html"],
  theme: {
    fontFamily: {
      poppins: ["'Poppins'", "sans-serif"],
      openSans: ["'Open Sans'", "sans-serif"],
    },
    extend: {
      colors: {
        primaryViolet: "hsl(257, 40%, 49%)",
        primaryMagenta: "hsl(300, 69%, 71%)",
      },
      backgroundImage: {
        "desktop-pattern": "url('../images/bg-desktop.svg')",
        "mobile-pattern": "url('../images/bg-mobile.svg')",
      },
      backgroundSize: {
        "100%": "100%",
      },
    },
  },
  plugins: [],
};
