import twPlugin from './plugin.js';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", '[data-mode="dark"]'],
  content: ["src/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "src/stories/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },
  plugins: [twPlugin()],
};
