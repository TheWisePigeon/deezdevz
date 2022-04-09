module.exports = {
  content: [
    "./src/components/*.vue",
    "./src/layouts/*.vue",
    "./src/pages/*.vue",
    "./src/templates/*.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}
