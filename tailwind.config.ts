import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				'dms-serif': 'var(--font-dms-serif-display)',
			},
			colors: {
				'primary-light': '#C6FFD7',
				'primary-dark': '#415953',
				primary: '#518A79',
				'grey-100': '#F3F5F6',
				'grey-200': '#E1E6ED',
				'grey-300': '#C8D2DF',
				'grey-800': '#313C49',
				'grey-900': '#1F2126',
				'body-alt': '#5F738C',
			},
			backgroundImage: {
				resturant: "url('/images/bg-1.png')",
				motto: "url('/images/bg-2.png')",
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
};
export default config;
