import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about pre-processors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			fallback: '200.html',
			// prerender: {
			// enabled: false,
			// entries: []
			// },
			// ssr: false
		}),
		vite: {
			server: {
				port: 8888,
			},
			envPrefix: "MTN_",
			resolve: {
				alias: {
					$data: path.resolve('./src/data'),
				}
			}
		}
	}
};

export default config;
