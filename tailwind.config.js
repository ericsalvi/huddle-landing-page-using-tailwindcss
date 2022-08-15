/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html"],
  theme: {
    fontFamily: {
      poppins: ["'Poppins'", "sans-serif"],
    },
    extend: {
      colors: {
        violet: "hsl(257, 40%, 49%)",
        magenta: "hsl(300, 69%, 71%)",
      },
    },
  },
  plugins: [],
};
