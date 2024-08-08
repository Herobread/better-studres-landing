/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundSize: {
				'200%': '200%'
			},
			backgroundImage: {
				'rainbow-gradient': 'linear-gradient(to right, #FF0000 0%, #55FF00 25%, #00FFEE 60%, #E500FF 80%, #FF0000 100%)',
			},
			keyframes: {
				'scroll-x': {
					'0%': { backgroundPosition: '0% 50%' },
					'100%': { backgroundPosition: '200% 50%' },
				},
			},
			animation: {
				'scroll-x': 'scroll-x 1s linear infinite',
			},
		},
	},
	plugins: [],
}
