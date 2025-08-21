/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: { DEFAULT: "1rem", sm: "1.25rem", lg: "2rem", xl: "2rem", "2xl": "2.5rem" },
      },
      boxShadow: {
        soft: "0 6px 24px -8px rgb(0 0 0 / 0.12)",
        "soft-dark": "0 6px 24px -8px rgb(0 0 0 / 0.6)",
      },
    },
  },
  plugins: [],
};
