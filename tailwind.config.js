/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
	theme: {
		extend: {
			screens: {
				mobile: '375px',
				desktop: '1440px'
			},
			colors: {
				'light-pink': '#F8EEFF',
				'dark-purple': '#301534',
			},
			fontSize: {
				'title': '56px',
				'title-sm': '32px',
			},
			fontFamily: {
				'work-sans': '"Work Sans"',
				'work-sans-italic': '"Work Sans Italic"',
			},
		},
	},
	plugins: [],
};
