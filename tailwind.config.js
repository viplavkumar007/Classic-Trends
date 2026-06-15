/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          deep: '#03363D',
          dark: '#021F24',
          mid: '#044D56',
          light: '#065F6B',
        },
        gold: {
          luxury: '#D4AF37',
          champagne: '#E6D3A3',
          pale: '#F5ECC8',
          dark: '#B8941F',
        },
        navy: {
          logo: '#1a1a4e',
          deep: '#12123a',
        },
        salon: {
          bg: '#021F24',
          card: '#032830',
          border: 'rgba(212,175,55,0.2)',
          muted: '#B8C4C7',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        accent: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #E6D3A3 50%, #D4AF37 100%)',
        'emerald-gradient': 'linear-gradient(135deg, #021F24 0%, #03363D 50%, #044D56 100%)',
        'hero-gradient': 'linear-gradient(180deg, rgba(2,31,36,0.7) 0%, rgba(2,31,36,0.5) 50%, rgba(2,31,36,0.9) 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(3,54,61,0.8) 0%, rgba(2,31,36,0.9) 100%)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212,175,55,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212,175,55,0.6)' },
        },
        glow: {
          from: { textShadow: '0 0 10px rgba(212,175,55,0.5)' },
          to: { textShadow: '0 0 20px rgba(212,175,55,0.9), 0 0 30px rgba(212,175,55,0.5)' },
        },
      },
      boxShadow: {
        'gold': '0 0 30px rgba(212,175,55,0.3)',
        'gold-lg': '0 0 60px rgba(212,175,55,0.4)',
        'card': '0 8px 32px rgba(0,0,0,0.4)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.6), 0 0 30px rgba(212,175,55,0.2)',
        'glass': '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
