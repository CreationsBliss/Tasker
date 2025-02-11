/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Nunito", "serif"], // Replace with your font name
      },
    },
  },
  plugins: [require("daisyui")],
};
