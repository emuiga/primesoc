import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#050C18',
        'card-bg': '#0A1628',
        'card-bg2': '#0D1E35',
        'blue-primary': '#1A5FA8',
        'blue-mid': '#1E7BC4',
        teal: '#1EADB5',
        'teal-bright': '#2ECAD3',
        'text-white': '#F0F6FF',
        'text-muted': '#7A9BBE',
        'text-dim': '#3A567A',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        sub: ['var(--font-sub)', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}

export default config
