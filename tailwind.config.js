// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'zoom-out': {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '100%': { transform: 'scale(0.8)', opacity: 1 },
        },
        'zoom-out-reduce': {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '100%': { transform: 'scale(0.8)', opacity: 1 },
        },
        'zoom-out-bottom-top': {
          '0%': { transform: 'translateY(100%) scale(1)', opacity: 0 },
          '100%': { transform: 'translateY(0) scale(0.5)', opacity: 1 },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 1s ease-in-out forwards',
        fadeIn: 'fadeIn 2s ease-in-out forwards',
        zoomIn: 'zoomIn 1s ease-in-out',
        'zoom-out': 'zoom-out 1s ease-out forwards',
        'zoom-out-bottom-top': 'zoom-out-bottom-top 1s ease-out forwards',
        'zoom-out-reduce': 'zoom-out-reduce 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};
