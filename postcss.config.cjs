const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const precss = require('precss');
const tailwindcss = require('tailwindcss');

const mode = process.env.NODE_ENV;
const dev = mode === "development";

module.exports = {
	plugins: [
		autoprefixer,
		precss,
		tailwindcss,
		
		!dev && cssnano({
			preset: "default",
		}),
	],
};
