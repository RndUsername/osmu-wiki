import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '#c9c4e0', 600: '#6e5da8', 900: '#332c4d', 950: '#242035' };
const gray = { 100: '#f6f6f9', 200: '#eeecf4', 300: '#c2c0ca', 400: '#8d899a', 500: '#595565', 700: '#393644', 800: '#282432', 900: '#19171e' };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: { 
				accent, 
				gray,
				"osmu-purple": "#6A59A3"
			},
			fontFamily: {
				"osmu": ["Montserrat"]
			}
		},
	},
	plugins: [starlightPlugin()],
};