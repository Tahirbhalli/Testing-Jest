const Calculaor = require('../js/Calculater');
const str = require('../js/stringoperation');
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
test('capitalize string', () => {
  expect(str.capitalize('abc')).toBe('ABC');
});
test('reverse string ', () => {
  expect(str.reverse('abc')).toBe('cba');
});
