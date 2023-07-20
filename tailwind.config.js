/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#ffd9e4',
					100: '#ffccdb',
					200: '#ffbfd3',
					300: '#ff99b8',
					400: '#ff4d82',
					500: '#ff004d',
					600: '#e60045',
					700: '#bf003a',
					800: '#99002e',
					900: '#7d0026'
				}
			}
		},
		fontFamily: {
			sans: ['Inter', 'sans-serif']
		},
		keyframes: {
			firstLoad: {
				'0%': {
					opacity: '0',
					height: '5rem'
				},
				'20%': {
					opacity: '1',
					height: '4rem'
				},
				'85%': {
					opacity: '1',
					height: '4rem'
				},
				'100%': {
					opacity: '0',
					height: '20vh'
				}
			}
		},
		animation: {
			firstLoad: 'firstLoad 1.6s ease-in-out forwards'
		}
	},
	future: {
		hoverOnlyWhenSupported: true
	},
	plugins: []
};
