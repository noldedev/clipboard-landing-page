/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "strong-cyan": "hsl(171, 66%, 44%)",
          "light-blue": "hsl(233, 100%, 69%)",
        },
        neutral: {
          "dark-grayish-blue": "hsl(210, 10%, 33%)",
          "grayish-blue": "hsl(201, 11%, 66%)",
        },
      },
    },
  },
  plugins: [],
};
