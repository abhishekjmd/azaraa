import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#eeaa2b',
        'background-light': '#f8f7f6',
        'background-dark': '#221c10',
        'border-gold': '#e7dfcf',
      },
      fontFamily: {
        display: ['Noto Serif', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        sans: ['Noto Sans', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
};

export default config;
