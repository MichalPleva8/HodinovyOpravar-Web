/** @type {import("prettier").Config} */
export default {
	// Base Prettier options
	printWidth: 100,
	tabWidth: 4,
	useTabs: true,
	semi: false,
	singleQuote: true,
	quoteProps: 'as-needed',
	jsxSingleQuote: false,
	trailingComma: 'es5',
	bracketSpacing: true,
	bracketSameLine: false,
	arrowParens: 'always',
	endOfLine: 'lf',

	// Plugin configuration
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],

	// Astro-specific overrides
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
}
