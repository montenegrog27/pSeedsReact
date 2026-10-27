/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customYellow: "#ECCE4E",
        customBackGround: "#171717",
        ink: "#0a0a0a",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        title: "64px",
        description: "24px",
      },
      lineHeight: {
        title: "150%",
        description: "24px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.2, 0.6, 0.4, 1) infinite",
      },
      letterSpacing: {
        title: "-1.1%",
        description: "0%",
      },
    },
  },
  plugins: [],
};
