/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/tw-elements-react/dist/js/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
}
