/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#F8F5F2',
        'text-primary': '#3D3D3D',
        'text-accent': '#B6ADA6',
        'olive': '#A3B18A',
        'warm-beige': '#E8E3DE',
        'soft-brown': '#C9B99B',
        // LUMIÈRE DERM 컬러 시스템
        'lumi-ivory': '#F8F6F2',
        'lumi-beige': '#D8CBB8',
        'lumi-charcoal': '#3E3E3E',
        'lumi-olive': '#8F8A83',
        'lumi-rose': '#EADCD2',
        'lumi-mint': '#B5E6DC',
      },
      fontFamily: {
        'noto': ['Noto Sans KR', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
} 