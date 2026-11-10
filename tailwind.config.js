/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#d66043',
          hover: '#c25338',
          orange: '#f6795a',
          accent: '#c76a53',
        },
        dark: {
          DEFAULT: '#141414',
          card: 'rgba(255, 255, 255, 0.05)',
          subtle: 'rgba(255, 255, 255, 0.02)',
          border: 'rgba(255, 255, 255, 0.1)',
        },
        textMuted: '#8393ab',
        textDisabled: '#aebfcc',
        success: '#1ec358',
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
      borderRadius: {
        'lg': '8px',
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        'glow': '0 0 50px -10px rgba(214, 96, 67, 0.3)',
      }
    },
  },
  plugins: [],
}
