const request = require('supertest');
const app = require('./app');

test('GET / devuelve status 200', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
});

test('GET / contiene texto esperado', async () => {
  const res = await request(app).get('/');
  expect(res.text).toContain('Version');
});
