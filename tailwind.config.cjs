let colors = require('tailwindcss/colors');
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
				secondary: '#5941DC',
				'secondary-dark': '#3A23BE',
				'secondary-light': '#C3BAF2',
				'secondary-content': '#F0EEFC',
				'primary-dark': '#0f172a',
				'primary-light': '#dee2e6',
				'primary-content': '#f8f9fa',
				primary: '#334155'
			}
		}
	},

	plugins: []
};

module.exports = config;
