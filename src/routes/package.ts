// generated by src/routes/package.gen.ts

import type {Package_Json} from '@ryanatkn/gro/package_json.js';
import type {Src_Json} from '@ryanatkn/gro/src_json.js';

export const package_json = {
	name: 'grogarden.org',
	version: '0.0.1',
	description:
		'a static web app and Node library template with TypeScript, Svelte, SvelteKit, Vite, esbuild, Fuz, and Gro',
	glyph: '🏞',
	logo: 'logo.svg',
	logo_alt: 'a friendly pixelated spider facing you',
	public: true,
	homepage: 'https://www.grogarden.org/',
	repository: 'https://github.com/ryanatkn/grogarden.org',
	scripts: {
		start: 'gro dev',
		dev: 'gro dev',
		build: 'gro build',
		check: 'gro check',
		test: 'gro test',
		preview: 'vite preview',
		deploy: 'gro deploy',
	},
	type: 'module',
	engines: {node: '>=20.17'},
	devDependencies: {
		'@ryanatkn/belt': '^0.28.0',
		'@ryanatkn/eslint-config': '^0.5.7',
		'@ryanatkn/fuz': '^0.130.5',
		'@ryanatkn/gro': '^0.147.1',
		'@ryanatkn/moss': '^0.20.2',
		'@sveltejs/adapter-static': '^3.0.6',
		'@sveltejs/kit': '^2.8.1',
		'@sveltejs/vite-plugin-svelte': '^4.0.1',
		eslint: '^9.15.0',
		'eslint-plugin-svelte': '^2.46.0',
		prettier: '^3.3.3',
		'prettier-plugin-svelte': '^3.2.8',
		svelte: '^5.2.4',
		'svelte-check': '^4.0.9',
		tslib: '^2.8.1',
		typescript: '^5.6.3',
		'typescript-eslint': '^8.15.0',
		uvu: '^0.5.6',
	},
	prettier: {
		plugins: ['prettier-plugin-svelte'],
		useTabs: true,
		printWidth: 100,
		singleQuote: true,
		bracketSpacing: false,
		overrides: [{files: 'package.json', options: {useTabs: false}}],
	},
	sideEffects: ['**/*.css'],
	files: ['dist'],
} satisfies Package_Json;

export const src_json = {name: 'grogarden.org', version: '0.0.1'} satisfies Src_Json;

// generated by src/routes/package.gen.ts
