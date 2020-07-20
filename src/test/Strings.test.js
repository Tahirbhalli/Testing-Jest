const str = require('../js/stringoperation');

test('capitalize string', () => {
  expect(str.capitalize('abc')).toBe('ABC');
});
test('reverse string ', () => {
  expect(str.reverse('abc')).toBe('cba');
});
