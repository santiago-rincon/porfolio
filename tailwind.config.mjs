/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				'auto-fit': 'repeat(auto-fit, minmax(300px, 1fr))',
			}
		},
	},
	darkMode: 'class',
	plugins: [],
}
