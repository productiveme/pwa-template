/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./client/index.html",
    "./client/**/*.{js,jsx}"
  ],
  darkMode: 'media', // automatically switches based on system preference
  theme: {
    extend: {
      colors: {
        // Light mode colors
        primary: {
          DEFAULT: '#3b82f6', // blue-500
          hover: '#2563eb', // blue-600
        },
        secondary: {
          DEFAULT: '#6b7280', // gray-500
          hover: '#4b5563', // gray-600
        },
        background: {
          DEFAULT: 'var(--background)',
          card: 'var(--background-card)',
        },
        text: {
          DEFAULT: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
        },
        border: 'var(--border-color)',
      },
    },
  },
  plugins: [],
}
