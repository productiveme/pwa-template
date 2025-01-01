/** @type {import('tailwindcss').Config} */
export default {
  content: ['./client/index.html', './client/**/*.{js,jsx}'],
  darkMode: 'media', // automatically switches based on system preference
  theme: {
    extend: {
      colors: {
        // Light mode colors
        primary: {
          DEFAULT: '#3b82f6',
        },
        accent: {
          DEFAULT: '#f43f5e', // Using a rose-500 color that works well with blue
        },
        secondary: {
          DEFAULT: '#6b7280',
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
