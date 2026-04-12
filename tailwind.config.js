/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Основные цвета
        "main-accent": "rgb(236 165 75 / <alpha-value>)",
        "main-dark": "rgb(94 66 55 / <alpha-value>)",
        "main-light": "rgb(226 213 194 / <alpha-value>)",
        "side-accent": "rgb(238 225 173 / <alpha-value>)",
        "basic-light": "rgb(255 255 255 / <alpha-value>)",
        "basic-dark": "rgb(0 0 0 / <alpha-value>)",

        // Бренд
        primary: {
          DEFAULT: "#aa3bff",
          hover: "#8c20db",
          light: "rgb(170 59 255 / 0.1)",
        },
        bg: {
          primary: "#ffffff",
          secondary: "#f9f9f9",
          code: "#f4f3ec",
        },
        text: {
          primary: "#6b6375",
          secondary: "#08060d",
          muted: "#9ca3af",
        },
        border: {
          DEFAULT: "#e5e4e7",
          focus: "#aa3bff",
        },
        status: {
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",
          info: "#3b82f6",
        },
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
        "3xl": "4rem",
      },
      borderRadius: {
        sm: "0.25rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        full: "9999px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
      },
      fontFamily: {
        lobster: ["Lobster", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
        sans: ['system-ui, "Segoe UI", Roboto, sans-serif'],
        mono: ["ui-monospace", "Consolas", "monospace"],
      },
    },
  },
  plugins: [],
};
