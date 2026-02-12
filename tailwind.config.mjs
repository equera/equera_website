/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary (logo) #FE5733 + scale for UI states
        primary: {
          DEFAULT: '#FE5733',
          50: '#fff0ed',
          100: '#ffddd6',
          200: '#ffc4b8',
          300: '#ffa08a',
          400: '#fe7354',
          500: '#FE5733',
          600: '#ed3d1a',
          700: '#c82d0f',
          800: '#a52810',
          900: '#882714',
        },
        // Brand palette (secondary and supporting)
        brand: {
          black: '#000000',
          'dark-purple': '#2A1D31',
          'charcoal-violet': '#382743',
          'blue-purple': '#927BFA',
          lavender: '#A490FF',
          'light-grey': '#ECECEC',
          'off-white': '#F8F9F9',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Lexend', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(254, 87, 51, 0.3)',
        'glow-lg': '0 0 40px rgba(254, 87, 51, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, rgba(254, 87, 51, 0.1) 0%, rgba(146, 123, 250, 0.1) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};
