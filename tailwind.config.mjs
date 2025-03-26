/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('/img/BlackDice.svg')"
      }),
      colors: {
        primary: "#A3FF50",
        secondary: "#000000",
        stroke: "#444645",
        white: "#ffffff",
        error: "#FF0000",
        dim: "#5B5858",
      },
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
        orbitron: ["var(--font-orbitron)", "sans-serif"],
      },
    },
  },
  plugins: [],
};