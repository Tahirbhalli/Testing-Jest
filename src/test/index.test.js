const Calculaor = require('../js/Calculater');


test('Sum', () => {
  expect(Calculaor.sum(1, 1)).toBe(2);
});
test('Subtraction ', () => {
  expect(Calculaor.subtraction(2, 1)).toBe(1);
});
test('Multiply ', () => {
  expect(Calculaor.multiply(2, 2)).toBe(4);
});
test('Division ', () => {
  expect(Calculaor.divide(2, 2)).toBe(1);
});
