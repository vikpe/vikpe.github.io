/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{astro,jsx,mdx}"],
  theme: {
    fontFamily: {
      sans: "Roboto, Helvetica, Arial, sans-serif",
      mono: "monospace",
    },
    extend: {
      colors: {
        vblue: "#000225",
        vcyan: "#04bff1",
        vmagenta: "#ed0d94",
      }
    }
  },
  plugins: [
    require("@tailwindcss/typography")
  ]
};
