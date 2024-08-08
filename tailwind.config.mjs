/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'rainbow-gradient': 'linear-gradient(to right, #FF0000 0%, #55FF00 25%, #00FFEE 60%, #E500FF 100%)',
			},
		},
	},
	plugins: [],
}
