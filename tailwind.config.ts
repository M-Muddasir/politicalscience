import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Main GCU colors based on https://gcu.edu.pk/
        primary: {
          DEFAULT: "#004400", // Deep green (exact match with GCU website)
          dark: "#003300",
          light: "#005500",
        },
        secondary: {
          DEFAULT: "#DAA520", // Gold
          dark: "#B8860B",
          light: "#FFD700",
        },
        accent: {
          DEFAULT: "#800000", // Maroon
          dark: "#620000",
          light: "#A00000",
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
