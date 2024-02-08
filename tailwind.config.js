/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      fontFamily:{
        urbanist:"urbanist"
        // azeret_mono: "azeret_mono"
      },
      colors:{
        "dark-blue": "#050A30",
        "navy-blue": "#000C66",
        "baby-blue": "#7EC8E3",
        "light-beige": "#C4AE78",
        "beige": "#6F5B3E",
        "ivory-gray": "#746C70",
        "cool-gray": "#4E4F50",
        "ivory": "#E2DED0",
        "blue-gray": "#647C90",
      },     
      darkMode: "dark"
    },
  },
  plugins: [],
  darkMode: "class",
};
