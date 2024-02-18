/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "cookie-bg": "url(./src/assets/cookieBg.svg)",
        "cookie-bg2": "url(./src/assets/Cookie2.jpeg)",
        "cookie-bg3": "url(./src/assets/Cookie3.jpeg)",
      },
    },
  },
  plugins: [],
};
