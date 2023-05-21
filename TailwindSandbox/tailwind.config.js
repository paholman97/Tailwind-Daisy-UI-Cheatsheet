/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Pages/**/*.cshtml"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
//npx tailwindcss -i ./wwwroot/css/input.css -o ./wwwroot/css/output.css --watch