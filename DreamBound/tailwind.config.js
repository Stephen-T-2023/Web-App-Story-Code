/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ash: "#A8B2B3",
        onyx: "#393E41",
        paynegrey: "#535B65",
        outerspace: "#4B5657",
        whitesmoke: "#F2F2F2",
        buttonpressed: "#394141"
      },
      fontFamily: {
        heading: ["Changa", "sans-serif"],
        body: ["Tenor Sans", "sans-serif"],
      },
      backgroundImage: {
        starrysky: "url('./assets/starrysky.jpg')"
      },
    }
  },
  plugins: [],
}