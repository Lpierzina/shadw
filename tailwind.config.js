/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '2rem'
      }
    },
    extend: {
      colors: {
        brand: {
          50: '#f5f7ff',
          100: '#ebf0ff',
          200: '#cfe0ff',
          300: '#9fc9ff',
          400: '#66a9ff',
          500: '#2a82ff',
          600: '#1266e6',
          700: '#0f4bb3',
          800: '#0b357f',
          900: '#061d4d'
        },
        muted: {
          DEFAULT: '#94a3b8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto']
      },
      boxShadow: {
        'soft-lg': '0 10px 30px rgba(2,6,23,0.08)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
}
