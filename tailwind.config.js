/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        'noir': {
          900: '#0d0d0d', // oklch(0.16 0.005 60)
          800: '#1a1a1a', // oklch(0.22 0.005 60)
        },
        'gold': {
          primary: '#c9a84c', // oklch(0.78 0.13 85)
          soft: '#f0d78c',    // oklch(0.88 0.10 88)
        },
        'text': {
          primary: '#f5f5f0', // oklch(0.96 0.01 80)
          muted: '#b3b3b3',   // oklch(0.70 0.02 80)
        },
      },
      fontFamily: {
        'urbanist': ['Urbanist', 'sans-serif'],
        'epilogue': ['Epilogue', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      letterSpacing: {
        'tight': '-0.02em',
        'widest': '0.3em',
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
      backdropBlur: {
        'xl': '20px',
      },
      gridAutoRows: {
        'auto': 'auto',
      },
      gap: {
        '4': '1rem',
      },
      backgroundImage: {
        'grid': 'linear-gradient(to right, rgba(201, 168, 76, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(201, 168, 76, 0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '48px 48px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
        },
      },
    },
  },
  plugins: [],
}
