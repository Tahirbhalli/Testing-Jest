require('../js/ceaser');

test('should ', () => {
  expect('abczy'.Ceaser(2)).toBe('cdeba');
});
test('should ', () => {
  expect('abczy1'.Ceaser(2)).toBe('cdeba1');
});
test('should ', () => {
  expect('Aabczy'.Ceaser(2)).toBe('Ccdeba');
});
