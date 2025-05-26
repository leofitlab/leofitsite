/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-green': {
          50: '#F0FFF4',
          100: '#D0FFE5',
          200: '#A0FFD6',
          300: '#70FFC6',
          400: '#40FFB7',
          500: '#10FFA8',
          600: '#00E097',
          700: '#00B077',
          800: '#008057',
          900: '#005037',
        },
        'tech-black': {
          50: '#E0E0E0',
          100: '#C0C0C0',
          200: '#A0A0A0',
          300: '#808080',
          400: '#606060',
          500: '#404040',
          600: '#303030',
          700: '#202020',
          800: '#101010',
          900: '#080808',
        },
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(16, 255, 168, 0.6), 0 0 10px rgba(16, 255, 168, 0.4)' },
          '100%': { boxShadow: '0 0 10px rgba(16, 255, 168, 0.8), 0 0 20px rgba(16, 255, 168, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};