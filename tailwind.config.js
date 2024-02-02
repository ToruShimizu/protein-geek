/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./app/**/*.{js,ts,jsx,tsx,mdx,css}", "./node_modules/tw-elements-react/dist/js/**/*.js"],
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/tw-elements-react/dist/js/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
}
