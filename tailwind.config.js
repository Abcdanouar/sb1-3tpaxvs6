/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0F3460',
          light: '#183D6D',
          dark: '#0A264A',
        },
        accent: {
          DEFAULT: '#FFD700',
          light: '#FFDF33',
          dark: '#E6C200',
        },
      },
      animation: {
        'bounce': 'bounce 1.5s infinite',
      },
    },
  },
  plugins: [],
};