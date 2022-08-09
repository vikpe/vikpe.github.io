/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{astro,jsx,mdx}"],
  theme: {
    fontFamily: {
      sans: "Roboto, Helvetica, Arial, sans-serif",
      mono: "monospace",
    },
    extend: {}
  },
  plugins: [
    require("@tailwindcss/typography")
  ]
};
