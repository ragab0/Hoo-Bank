/** @type {import('tailwindcss').Config}  */
module.exports = {
  content: [
    './app/**/*.js',
    './components/**/*.js',
    './pages/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--clr-primary)",
        secondary: "var(--clr-secondary)",
        dimWhite: "var(--clr-dimWhite)",
        dimBlue: "var(--clr-dimBlue)",
      }
    },
  },
}
