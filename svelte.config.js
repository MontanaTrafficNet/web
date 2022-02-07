import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about pre-processors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$data: path.resolve('./src/data'),
				}
			}
		}
	}
};

export default config;
