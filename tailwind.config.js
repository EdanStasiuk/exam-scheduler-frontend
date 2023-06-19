import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';

/** @satisfies {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [formsPlugin, typographyPlugin],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'color(display-p3 0.933 0.98 0.902 / <alpha-value>)',
          100: 'color(display-p3 0.878 0.961 0.82 / <alpha-value>)',
          200: 'color(display-p3 0.757 0.922 0.639 / <alpha-value>)',
          300: 'color(display-p3 0.635 0.882 0.459 / <alpha-value>)',
          400: 'color(display-p3 0.514 0.843 0.278 / <alpha-value>)',
          500: 'color(display-p3 0.4 0.737 0.161 / <alpha-value>)',
          600: 'color(display-p3 0.322 0.592 0.129 / <alpha-value>)',
          700: 'color(display-p3 0.239 0.443 0.098 / <alpha-value>)',
          800: 'color(display-p3 0.161 0.294 0.063 / <alpha-value>)',
          900: 'color(display-p3 0.078 0.149 0.031 / <alpha-value>)',
          950: 'color(display-p3 0.035 0.067 0.016 / <alpha-value>)'
        },
        secondary: {
          50: 'color(display-p3 0.98 0.898 0.906 / <alpha-value>)',
          100: 'color(display-p3 0.965 0.796 0.812 / <alpha-value>)',
          200: 'color(display-p3 0.929 0.592 0.62 / <alpha-value>)',
          300: 'color(display-p3 0.89 0.388 0.431 / <alpha-value>)',
          400: 'color(display-p3 0.855 0.184 0.239 / <alpha-value>)',
          500: 'color(display-p3 0.682 0.122 0.169 / <alpha-value>)',
          600: 'color(display-p3 0.545 0.098 0.133 / <alpha-value>)',
          700: 'color(display-p3 0.408 0.071 0.102 / <alpha-value>)',
          800: 'color(display-p3 0.271 0.047 0.067 / <alpha-value>)',
          900: 'color(display-p3 0.137 0.024 0.035 / <alpha-value>)',
          950: 'color(display-p3 0.067 0.012 0.016 / <alpha-value>)'
        },
        surface: {
          50: 'color(display-p3 0.898 0.914 0.941 / <alpha-value>)',
          100: 'color(display-p3 0.808 0.839 0.89 / <alpha-value>)',
          200: 'color(display-p3 0.616 0.675 0.784 / <alpha-value>)',
          300: 'color(display-p3 0.427 0.514 0.675 / <alpha-value>)',
          400: 'color(display-p3 0.29 0.369 0.51 / <alpha-value>)',
          500: 'color(display-p3 0.18 0.227 0.318 / <alpha-value>)',
          600: 'color(display-p3 0.145 0.184 0.255 / <alpha-value>)',
          700: 'color(display-p3 0.11 0.137 0.192 / <alpha-value>)',
          800: 'color(display-p3 0.071 0.09 0.129 / <alpha-value>)',
          900: 'color(display-p3 0.035 0.047 0.063 / <alpha-value>)',
          950: 'color(display-p3 0.016 0.02 0.027 / <alpha-value>)'
        }
      }
    }
  }
};

export default config;