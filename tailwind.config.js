/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e0f7ff',
          100: '#b3ecff',
          200: '#80e1ff',
          300: '#4dd6ff',
          400: '#1acbff',
          500: '#00bfff',
          600: '#00a3e0',
          700: '#0087c2',
          800: '#006ba3',
          900: '#004f85',
        },
        secondary: {
          50: '#e6f0f5',
          100: '#cce1eb',
          200: '#99c3d7',
          300: '#66a5c3',
          400: '#3387af',
          500: '#00699b',
          600: '#00547c',
          700: '#003f5d',
          800: '#002a3e',
          900: '#001520',
        },
        dark: {
          50: '#1a2332',
          100: '#141d2b',
          200: '#0f1724',
          300: '#0a111d',
          400: '#050b16',
          500: '#00050f',
          600: '#000408',
          700: '#000204',
          800: '#000102',
          900: '#000000',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
       keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 8s linear infinite'
      },
    },
  },
  plugins: [],
}
