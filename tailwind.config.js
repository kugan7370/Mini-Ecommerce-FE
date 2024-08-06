/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#001EB9",
        secondary: {
          F7: "#F7F7F7",
          96: "#969191",
          16: "#162427",
        },
      },
      fontFamily: {
        Satoshi: ["Satoshi", "sans-serif"],
        "Satoshi-Medium": ["Satoshi-Medium", "sans-serif"],
        "Satoshi-Bold": ["Satoshi-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
