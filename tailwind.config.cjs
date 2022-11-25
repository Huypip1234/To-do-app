/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			screens: {
				'ssm': '414px',
			}
    },
	},
	plugins: [
		require('tailwind-scrollbar'),
	],
};
