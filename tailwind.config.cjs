const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Fira Mono',
          'Inter',
          'system-ui',
          '-apple-system',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif'
        ]
      },
      colors: {
        primary: '#5941DC',
        'primary-dark': '#3A23BE',
        'primary-light': '#C3BAF2',
        'primary-content': '#F0EEFC',
        'secondary-dark': '#038C2E',
        'secondary-light': '#C3FED6',
        'secondary-content': '#001407',
        secondary: '#27FB6B'
      }
    }
  },

  plugins: []
};

module.exports = config;
