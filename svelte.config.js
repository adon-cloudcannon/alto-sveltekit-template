import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

import autoImport from 'sveltekit-autoimport';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md']
}

const config = {
	extensions: ['.svelte', '.md'],
	kit: {
		adapter: adapter(),
		prerender: {
			handleHttpError: 'warn',
			entries: [
				'*',
				'/sitemap/',
				'/sitemap.xml',
			]
		},
	},
	preprocess: [
		autoImport({
			components: ['./src/lib/shortcodes']
		}),
		vitePreprocess(), 
		mdsvex(mdsvexOptions)
	]
};

export default config;
