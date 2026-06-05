test('operacion basica funciona', () => {
  expect(1 + 1).toBe(2);
});

test('string contiene texto', () => {
  const texto = 'Version 1 desplegada con Render';
  expect(texto).toContain('Version');
});