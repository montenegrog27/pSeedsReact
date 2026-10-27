/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customYellow: "#ECCE4E",
        customBackGround: "#171717",
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
      letterSpacing: {
        title: "-1.1%",
        description: "0%",
      },
    },
  },
  plugins: [],
};
