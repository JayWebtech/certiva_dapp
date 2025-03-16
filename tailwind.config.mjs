
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#A3FF50",
          secondary: "#000000",
          stroke: "#444645"
        },
        fontFamily: {
          'sora': ['var(--font-sora)', 'sans-serif'],
          'orbitron': ['var(--font-orbitron)', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  