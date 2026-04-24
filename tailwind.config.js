/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#FF6B35",
        accent2: "#FFD700",
        accent: "#944E2D",
        accent3: "#1B5336",
        accent4: "#34495E",
        primary_btn_hover__color: "#da5828",
        dark_text: "#444141f1",
        gray_text: "#9B9C9B",
        light_color: "#FFF5F2",
        dark_bg: "#2C2C2C",
        medium_bg: "#FFEDE7",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        body: ["space Grotesk", "sans-serif"],
        heading: ["Garet", "san-serif"],
        gemstones: ["Rubik Gemstones", "cursive"],
      },
      animationDelay: {
        0: "0s",
        100: "0.1s",
        200: "0.2s",
        300: "0.3s",
        400: "0.4s",
        500: "0.5s",
        600: "0.6s",
        700: "0.7s",
        800: "0.8s",
        900: "0.9s",
        1000: "1s",
        1500: "1.5s",
        2000: "2s",
        2500: "2.5s",
        3000: "3.5s",
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px) translateX(0px)",
            opacity: "0.7",
          },
          "25%": {
            transform: "translateY(-10px) translateX(5px)",
            opacity: "1",
          },
          "50%": {
            transform: "translateY(-20px) translateX(-5px)",
            opacity: "0.8",
          },
          "75%": {
            transform: "translateY(-10px) translateX(3px)",
            opacity: "1",
          },
        },
      },
      animation: {
        "particle-float": "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
