/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#121110',
          base: '#0D0C0B',
          surface: '#181716',
          card: '#1F1D1B',
          elevated: '#262421',
          border: 'rgba(197, 164, 109, 0.25)',
        },
        ivory: {
          DEFAULT: '#F7F2EA',
          50: '#FCFAF6',
          100: '#F7F2EA',
          200: '#EFE6D7',
          300: '#E6D7C1',
        },
        gold: {
          DEFAULT: '#C5A46D',
          light: '#DFC699',
          bright: '#D4AF37',
          warm: '#E6C875',
          dark: '#A68249',
          50: '#F9F6EE',
          100: '#F2EBDC',
          200: '#E5D6B8',
          300: '#D7BF93',
          400: '#C5A46D',
          500: '#A68249',
        },
        burgundy: {
          DEFAULT: '#4A1F2D',
          light: '#6B3243',
          dark: '#35141F',
          royal: '#5A1F30',
          900: '#260B14',
        },
        charcoal: {
          DEFAULT: '#242321',
          light: '#3D3B37',
          muted: '#8C857B',
        },
        beige: {
          DEFAULT: '#E8DED0',
          light: '#F1EAE0',
          dark: '#D8CAB7',
        },
        bronze: {
          DEFAULT: '#92734F',
          light: '#AC8C65',
          dark: '#765A3B',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', '"Manrope"', 'system-ui', 'sans-serif'],
        hindiSerif: ['"Rozha One"', '"Noto Serif Devanagari"', 'serif'],
        hindiSans: ['"Noto Sans Devanagari"', '"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.35)',
        'glass-hover': '0 14px 40px 0 rgba(197, 164, 109, 0.25)',
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.3)',
        'premium': '0 20px 50px -10px rgba(0, 0, 0, 0.5)',
        'gold-glow': '0 0 25px rgba(197, 164, 109, 0.35)',
      },
      letterSpacing: {
        'luxury': '0.2em',
        'wide-luxury': '0.3em',
      },
      animation: {
        'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',
        'float': 'float 4s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.88', transform: 'scale(1.03)' },
        },
      },
    },
  },
  plugins: [],
}
