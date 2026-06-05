const sum = require('./sum');

test('suma 2 + 3 debe dar 5', () => {
  expect(sum(2, 3)).toBe(5);
});

test('suma con numero negativo', () => {
  expect(sum(-1, 4)).toBe(3);
});