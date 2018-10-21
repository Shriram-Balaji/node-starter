const test = require('ava');
const request = require('supertest');
const BASE_URL = 'http://localhost:9000';
test('Ping works', async (t) => {
	try {
		const { body } = await request(BASE_URL).get('/ping');
		t.deepEqual(body, { success: true });
	} catch (err) {
		t.falsy(err);
	}
});
