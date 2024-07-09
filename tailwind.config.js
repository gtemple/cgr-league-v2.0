import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        libre: ['"Jost"', ...defaultTheme.fontFamily.sans]
      }

    },
  },
  plugins: [],
}