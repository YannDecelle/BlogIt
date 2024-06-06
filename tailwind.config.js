/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Ensure all relevant file types are included
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        bluebg: "#f7f8ff",
        bluetag: "#4B6BFB",
      },
    },
  },
  plugins: [],
};
