const str = require('../js/stringoperation');

test('capitalize string', () => {
  expect(str.capitalize('abc')).toBe('Abc');
});
test('reverse string ', () => {
  expect(str.reverse('abc')).toBe('cba');
});
