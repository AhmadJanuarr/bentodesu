import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        laptop: "1366px",
        desktop: "1920px",
      },
      colors: {
        primary: "#FFE8D4",
        secondary: "#FF7F0F",
      },
    },
  },
  plugins: [],
};
export default config;
