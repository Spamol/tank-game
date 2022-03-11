const Main = require('./main');

const main = new Main();

test('x^2+1 = 0', () => {
  expect(main.solve(1, 0, 1)).toEqual([ ]);
});

test('x^2-1 = 0', () => {
  expect(main.solve(1, 0, -1)).toEqual([ 1, -1 ]);
});

test('discriminant > 0 && discriminant < epsilon', () => {
  expect(main.solve(2, 1.65, 0.3)).toEqual([ -0.2705272913549932 ]);
});

test('a > 0 && a < 1', () => {
  expect(main.solve(0.3, 1, 1)).toEqual(false);
});

test('a, b, c not numbers', () => {
  expect(main.solve('1', false, null)).toEqual(false);
});