import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

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
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)]
};

export default config;
