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
        primary: '#FFFFFF',
        'text-primary': '#111111',
        'text-secondary': '#6B7280',
        'text-tertiary': '#9CA3AF',
        accent: '#2563EB',
        background: '#FEFEFE',
        border: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Charter', 'Georgia', 'serif'],
        serif: ['Charter', 'Georgia', 'serif'],
      },
      fontSize: {
        'hero': ['48px', { lineHeight: '1.2' }],
        'section': ['36px', { lineHeight: '1.3' }],
        'subsection': ['24px', { lineHeight: '1.4' }],
        'title': ['20px', { lineHeight: '1.5' }],
        'body': ['16px', { lineHeight: '1.6' }],
        'small': ['14px', { lineHeight: '1.5' }],
      },
      lineHeight: {
        'relaxed': '1.6',
      },
      letterSpacing: {
        'tight': '-0.01em',
      },
      maxWidth: {
        'readable': '960px',
      },
      spacing: {
        'section': '80px',
        'component': '32px',
        'desktop-margin': '24px',
        'mobile-margin': '16px',
      },
      minHeight: {
        'section': '60vh',
      }
    },
  },
  plugins: [],
} 