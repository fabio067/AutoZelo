import { API_BASE_URL } from '$app/env/private';
import { PUBLIC_APP_NAME } from '$app/env/public';
import type { PageServerLoad } from './$types';

export const csr = false;

export const load: PageServerLoad = async ({ fetch }) => {
	let apiOnline = false;

	try {
		const response = await fetch(new URL('/health', API_BASE_URL), {
			credentials: 'omit',
			signal: AbortSignal.timeout(2000)
		});
		if (response.ok) {
			const health: { status?: unknown } | null = await response.json();
			apiOnline = health?.status === 'ok';
		}
	} catch {
		// A página inicial continua disponível se a API não responder.
	}

	return { appName: PUBLIC_APP_NAME, apiOnline };
};
