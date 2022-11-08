/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      "sky-c": "#dbe9f2",
      ancent: "#46a5e5",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
