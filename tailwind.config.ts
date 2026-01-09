import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background))",
        surface: "rgb(var(--surface))",
        foreground: "rgb(var(--foreground))",
        muted: "rgb(var(--muted))",
        primary: "rgb(var(--primary))",
        secondary: "rgb(var(--secondary))",
        border: "rgb(var(--border))",
      },
    },
  },
  plugins: [],
};

export default config;
