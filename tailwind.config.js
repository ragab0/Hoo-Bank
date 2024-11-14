/** @type {import('tailwindcss').Config}  */
module.exports = {
  content: ["./app/**/*.js", "./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "var(--clr-primary)",
        secondary: "var(--clr-secondary)",
        dimWhite: "var(--clr-dimWhite)",
        dimBlue: "var(--clr-dimBlue)",
      },
      animation: {
        slideUp: "slideUp 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
      },
      keyframes: {
        slideUp: {
          "0%": {
            transform: "translateY(100px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
      margin: {
        mainMargin: "var(--main-margin)",
        mainMarginHalf: "calc(var(--main-margin) * 0.5)",
      },
    },
  },
};
