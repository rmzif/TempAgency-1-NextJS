/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '12xl': ['18rem', {}],
        '10xl': ['15rem', {}],
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      lineHeight: {
        'extra-loose': '2.5',
        3: '3rem',
      },
      colors: {
        orange: '#FF5733',
      },
    },
  },
  plugins: [],
};
