import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brandNavy: '#0b1020',
        brandGold: '#d6a84f',
        brandRed: '#c62828',
        brandSlate: '#111a2e'
      },
      boxShadow: {
        card: '0 10px 30px rgba(0,0,0,0.25)'
      }
    }
  },
  plugins: []
};

export default config;
