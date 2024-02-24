/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "cookie-bg": "url(./public/cookieBg.svg)",
        "cookie-bg2": "url(./public/Cookie2.jpeg)",
        "cookie-bg3": "url(./public/Cookie3.jpeg)",
      },
    },
  },
  plugins: [],
};
