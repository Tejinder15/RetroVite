/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        retro: "#ef233c",
        "dark-primary": "#14131a",
      },
      gridTemplateColumns: {
        videoContainer: "repeat(auto-fit, minmax(260px, 1fr))",
      },
    },
  },
  plugins: [],
};
