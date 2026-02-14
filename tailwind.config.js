/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#05070D",
        blueglow: "#00A3FF",
        softblue: "#4D7CFE",
        darkblue: "#0B2E4C",
      },
      boxShadow: {
        glow: "0 0 25px rgba(0,163,255,0.35)",
        glowStrong: "0 0 55px rgba(0,163,255,0.55)",
      },
    },
  },
  plugins: [],
};

