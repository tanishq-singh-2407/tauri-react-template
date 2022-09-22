/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx,html}",
	],
	theme: {
		extend: {
            height: {
                visible: "var(--visible-height)"
            },
            minHeight: {
                visible: "var(--visible-height)"
            },
            screens: {
                'lgt': { 'max': '1024px' },
            }
		}
	},
	plugins: [],
}