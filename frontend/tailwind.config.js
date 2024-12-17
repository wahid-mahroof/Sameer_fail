/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      sans: ["Poppins", "sans-serif"],
      cursive: ["Pacifico", "cursive"],

      colors: {
        primary: "#854d3d",
        secondary: "#4a1e1b",
        brandDark: "#270c03",
      },
      container: {
        center: true,
        padding: {
          DEFALT: "1rem",
          sm: "2rem",
        },
      },
    },
  },
  plugins: [],
};
