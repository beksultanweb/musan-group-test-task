/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        thankyou: '241px',
        height: '54px',
        width: '360px',
        paddingx: '56px',
      },
      borderRadius: {
        15: '15px',
      },
      fontSize: {
        14: '14px',
        18: '18px',
      },
      colors: {
        grey: {
          400: '#CACACA',
        },
        blue: {
          400: '#17ABEB',
        },
        success: {
          400: '#5BD222',
        },
        error: {
          400: '#FF3F25',
        },
        black: {
          400: '#000',
        },
        default: {
          400: '#888888',
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
