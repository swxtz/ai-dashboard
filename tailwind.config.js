/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: {
          100: "#F8FAFC",
          200: "#E2E8F0",
          300: "#94A3B8",
          400: "#334155",
          500: "#1E293B",
          600: "#0F172A",
          700: "#020617",
        },
      },

      backgroundImage: {
        "background-blue": "url('/src/assets/img-bg.png')",
      },
    },
  },
  plugins: [],
};
