/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
				'lg': '0px 4px 20px rgba(0, 0, 0, 0.25)',
			},
		},
	},
	plugins: [],
}
