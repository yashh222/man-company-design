/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'roll-in-left': {
          '0%': {
            transform: 'translateX(-800px) rotate(-540deg)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0) rotate(0deg)',
            opacity: '1',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        'roll-in-left': 'roll-in-left 0.6s ease-out infinite both',
      },
    },
  },
  plugins: [],
  extend: {
    fontFamily: {
      cinzel: ['Cinzel', 'serif'],
    }
  }
};
