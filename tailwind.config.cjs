/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
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
            },
            keyframes: {
                wiggle: {
                    '75%, 100%': {
                        transform: 'scale(1.2)',
                        opacity: 0
                    }
                }
            },
            animation: {
                wiggle: 'wiggle 1s cubic-bezier(0,0,0.2,1) forwards',
            }
		}
	},
	plugins: [],
}