/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        onyx: "#393E41",
        paynegrey: "#535B65",
        outerspace: "#4B5657",
        whitesmoke: "#F2F2F2",
      },
    },
  },
  plugins: [],
}