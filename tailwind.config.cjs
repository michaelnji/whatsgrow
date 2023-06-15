const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				'mono': ['Fira Mono']
			},
			colors: {
				primary: '#5941DC',
				'primary-dark': '#3A23BE',
				'primary-light': '#C3BAF2',
				'primary-content': '#F0EEFC',
				'secondary-dark': '#0f172a',
				'secondary-light': '#dee2e6',
				'secondary-content': '#f8f9fa',
				secondary: '#334155'
			}
		}
	},

	plugins: []
};

module.exports = config;
