const product = require('./product');

test('product of 1 * 2 to equal 2', () => {
  expect(product(1, 2)).toBe(2)
})

test('product of 1 * 2 to not equal 1', () => {
  expect(product(1,2)).not.toBe(1)
})