import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	PUBLIC_APP_NAME: {
		public: true,
		schema: (value) => value?.trim() || 'AutoZelo'
	},
	API_BASE_URL: {
		schema: (value) => value?.trim() || 'http://127.0.0.1:5080'
	}
});
