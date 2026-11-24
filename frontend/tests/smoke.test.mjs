import assert from 'node:assert/strict';
import { test } from 'node:test';

const api = process.env.API_BASE_URL || 'http://127.0.0.1:5080';
const frontend = process.env.FRONTEND_URL || 'http://127.0.0.1:5173';

function request(origin, path) {
	return fetch(new URL(path, origin), { signal: AbortSignal.timeout(5000) });
}

test('a API responde à sonda de saúde', async () => {
	const response = await request(api, '/health');
	assert.equal(response.status, 200);
	assert.deepEqual(await response.json(), { status: 'ok' });
});

test('o OpenAPI de desenvolvimento descreve a sonda', async () => {
	const response = await request(api, '/openapi/v1.json');
	assert.equal(response.status, 200);
	const document = await response.json();
	assert.ok(document.paths?.['/health']?.get?.responses?.['200']);
});

test('a página inicial renderiza o estado da API no servidor', async () => {
	const response = await request(frontend, '/');
	assert.equal(response.status, 200);
	const html = await response.text();
	assert.match(html, /<html lang="pt-BR">/);
	assert.match(html, /API disponível/);
	assert.doesNotMatch(html, /<script\b/);
});
