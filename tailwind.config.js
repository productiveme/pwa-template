/** @type {import('tailwindcss').Config} */
export default {
  content: ['./client/index.html', './client/**/*.{js,jsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          hover: ({ theme }) => {
            const color = theme('colors.primary.DEFAULT');
            return color.replace('#', '').match(/.{2}/g)
              .map(hex => Math.max(0, parseInt(hex, 16) - 25))
              .map(dec => dec.toString(16).padStart(2, '0'))
              .join('');
          }
        },
        secondary: {
          DEFAULT: '#6b7280',
          hover: ({ theme }) => {
            const color = theme('colors.secondary.DEFAULT');
            return color.replace('#', '').match(/.{2}/g)
              .map(hex => Math.max(0, parseInt(hex, 16) - 25))
              .map(dec => dec.toString(16).padStart(2, '0'))
              .join('');
          }
        },
        accent: {
          DEFAULT: '#f43f5e',
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
