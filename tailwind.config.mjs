/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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
        require("@tailwindcss/typography"),
    ],
}
