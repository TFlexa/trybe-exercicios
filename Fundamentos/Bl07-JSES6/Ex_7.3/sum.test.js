const { test, expect } = require("@jest/globals");

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

test('Verificar se a resposta da soma de (4, 5)', () => {
  expect(sum(4, 5)).toBe(9);
});

test('Verificar se a resposta da soma de (0, 0)', () => {
  expect(sum(0, 0)).toBe(0);
});

test('Verificar se a resposta da soma de (4, "5") é erro', () => {
  expect(() => {
    sum(4, "5");
  }).toThrow('parameters must be numbers');
});