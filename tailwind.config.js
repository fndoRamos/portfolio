module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#D5DDDF',
        accent: '#B2C5B2',
        bg1: '#1B2727',
        bg2: '#3C5148',
        bg3: '#6B8E4E',
      },
      backgroundImage: {
        site: "url('./assets/site-bg.png')",
        about: "url('./assets/about1.png')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
};
