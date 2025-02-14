import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E30613', // Sağlık Bakanlığı kırmızısı
        secondary: '#027B59', // Yeşil vurgular
        background: '#FFFFFF', // Beyaz arka plan
        gray: '#D9D9D9', // Çizgi ve ayırıcı renk
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'], // Kurumsal font
      },
    },
  },
  plugins: [],
};

export default config;
