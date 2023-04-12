/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgMain: "#F1DEBE",
        tRed: "#AD4029",
        tBrown: "#614134",
        tBrownLight: "rgba(97, 65, 52, 0.08)",
      },
      scale: {
        10: ".3",
      },
      maxHeight: {
        128: "40rem",
      },
    },
  },
  plugins: [],
};
