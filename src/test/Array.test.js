require('../js/Array');

test('min', () => {
  expect([1, 2, 3].min()).toBe(1);
});
test('max', () => {
  expect([1, 2, 3].max()).toBe(3);
});
test('Avg of array', () => {
  expect([1, 2, 3].avg()).toBe(2);
});
test('length array', () => {
  expect([1, 2, 3, 4].length).toBe(4);
});
