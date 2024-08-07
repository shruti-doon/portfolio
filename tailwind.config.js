// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'white': '2px 2px 4px rgba(255, 255, 255, 0.6)',
        'white-md': '3px 3px 6px rgba(255, 255, 255, 0.6)',
        'white-lg': '5px 5px 10px rgba(255, 255, 255, 0.6)',
        'white-xl': '7px 7px 15px rgba(255, 255, 255, 0.6)',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(0)' },
          '75%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        wave: 'wave 1s ease-in-out infinite',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/filters'), // Correctly add the filters plugin here
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-white': {
          'text-shadow': '2px 2px 4px rgba(255, 255, 255, 0.6)',
        },
        '.text-shadow-white-md': {
          'text-shadow': '3px 3px 6px rgba(255, 255, 255, 0.6)',
        },
        '.text-shadow-white-lg': {
          'text-shadow': '5px 5px 10px rgba(255, 255, 255, 0.6)',
        },
        '.text-shadow-white-xl': {
          'text-shadow': '7px 7px 15px rgba(255, 255, 255, 0.6)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
