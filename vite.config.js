import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';

const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$vendor: resolve('./static/vendor/'),
			'@content': resolve('./content/'),
			'@data': resolve('./data/'),
		}
	},
	server: {
		fs: {
			// Allow serving files from one level up to the project root
			allow: ['..'],
		},
	},
};

export default config;