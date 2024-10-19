/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,ts,tsx,jsx}", "./public/index.html"],
	theme: {
		extend: {
			colors: {
				primary: "var(--primary)",
				dark: "var(--dark)",
			},
		},
	},
	plugins: [],
};
