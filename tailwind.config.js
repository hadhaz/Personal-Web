/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        europa: ["Europa", "Sans-Serif"],
        inconsolata: ["Inconsolata", "monospace"],
        Poppins: ["Poppins", "cursive"],
      },
      backgroundColor: {
        primary: "#f9f8f4",
      },
      colors: {
        "yellow-custom": "#f8cd5f",
        "blue-gray": "#99b0b0",
        "blue-gray-2" : "rgba(160, 176, 185, 1)",
        taupe: "#b5b2b0",
        cream: "#fcfaf0",
        "yellow-transparent": "rgba(248, 205, 95, .5)",
        secondary: "#e6dace",
      },
      animation: {
        in: "in 500ms forwards",
        out: "out 500ms forwards",
        "hacked-in": "hacked-in 400ms forwards",
        "hacked-out": "hacked-out 100ms forwards",
      },
      backgroundImage: {
        hero: "linear-gradient(180deg, rgba(249,248,244,1) 0%, rgba(249,248,244,1) 55%, rgba(255,255,255,1) 65%, rgba(255,255,255,1) 100%)",
        "hero-bottom":
          "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 60%, rgba(249,248,244,1) 85%, rgba(249,248,244,1) 100%)",
        "hero-dark":
          "linear-gradient(180deg, rgba(15, 23, 42, 1) 0%, rgba(15, 23, 42, 1) 25%, rgba(30, 41, 59, 1) 65%, rgba(30, 41, 59, 1) 100%)",
        "hero-dark-bottom":
          "linear-gradient(180deg, rgba(30, 41, 59, 1) 0%, rgba(30, 41, 59, 1) 60%, rgba(15, 23, 42, 1) 85%, rgba(15, 23, 42, 1) 100%)",
        "resume-mobile":
          "linear-gradient(360deg, #e6dace 0%, #e6dace 55%, rgba(255, 255, 255, 1) 55%, rgba(255,255,255,1) 100%)",
        resume:
          "linear-gradient(90deg, #e6dace 0%, #e6dace 45%, rgba(255, 255, 255, 1) 45%, rgba(255,255,255,1) 100%)",
      },
      keyframes: {
        in: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        out: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "hacked-in": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "hacked-out": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [] 
};
