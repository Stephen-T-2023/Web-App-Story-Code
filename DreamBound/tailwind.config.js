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
      },
      fontFamily: {
        heading: ["Changa", "sans-serif"],
        body: ["Tenor Sans", "sans-serif"],
      },
      backgroundImage: {
        starrysky: "url('./assets/starrysky.jpg')"
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        }
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out"
      }
    }
  },
  plugins: [],
}