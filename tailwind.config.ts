import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				"dms-serif": "var(--font-dms-serif-display)",
			},
			colors: {
				"primary-light": "#C6FFD7",
				"primary-dark": "#415953",
				primary: "#518A79",
				"grey-100": "#F3F5F6",
				"grey-200": "#E1E6ED",
				"grey-300": "#C8D2DF",
				"grey-800": "#313C49",
				"grey-900": "#1F2126",
				"body-alt": "#5F738C",
				muted: "#FBFBFB",
				brand: "#398DFA",
				header: "#313C49",
			},
			backgroundImage: {
				resturant: "url('/images/bg-1.webp')",
				masked: "url('/images/masked-bg.webp')",
				privacy: "url('/svgs/privacy-bg.svg')",
				"privacy-base": "url('/images/privacy-base.png')",
				"masked-full": "url('/images/masked-full.webp')",
				"masked-full-base": "url('/images/masked-full-base.webp')",
				"masked-base": "url('/images/masked-bg-base.webp')",
				"resturant-2": "url('/images/resturant-2.webp')",
				motto: "url('/images/bg-2.webp')",
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: {
						height: "0",
					},
					to: {
						height: "var(--radix-accordion-content-height)",
					},
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)",
					},
					to: {
						height: "0",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
