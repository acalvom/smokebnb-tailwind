/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EB5757',
        primaryText: '#333',
        secondaryText: '#828282',
        lightText: '#BDBDBD',
        gray: '#4F4F4F',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],
      },
      fontSize: {
        xl: '1.5rem',
        lg: '1rem',
        md: '0.875rem',
        sm: '0.75rem',
        xs: '0.5rem',
      },
      boxShadow: {
        all: '0px 1px 6px 0px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [],
};
