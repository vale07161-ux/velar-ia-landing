/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050805',
        carbon: '#0A0F0A',
        graphite: '#111711',
        line: 'rgba(197, 255, 77, 0.16)',
        lime: {
          300: '#D9FF72',
          400: '#B9FF38',
          500: '#8CFF00',
          600: '#62D900',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 34px rgba(140, 255, 0, 0.18)',
        'glow-strong': '0 0 80px rgba(140, 255, 0, 0.22)',
      },
      backgroundImage: {
        grid:
          'linear-gradient(rgba(185,255,56,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(185,255,56,.07) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
