import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A", // Dark background color
        secondary: "#0b1527", // Lighter card background
        accent: "#7C3AED",   // Accent color
        textLight: "#CBD5E1", // Light text color
        dark: "#030c1c", // Background for the entire card
        darkAccent: "#1E293B", // Accent for top bar and border
      },
    },
  },
  plugins: [],
} satisfies Config;
