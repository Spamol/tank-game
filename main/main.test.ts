const MainModule = require('./main');

const main = new MainModule();

test('x^2+1 = 0', () => {
  expect(main.solve(1, 0, 1)).toEqual([ ]);
});

test('x^2-1 = 0', () => {
  expect(main.solve(1, 0, -1)).toEqual([ 1, -1 ]);
});

test('discriminant > 0 && discriminant < epsilon', () => {
  expect(main.solve(2, 1.65, 0.3)).toEqual([ -0.2705272913549932, -0.5544727086450068 ]);
});

test('Math.abs(a) < 1e-10', () => {
  expect(main.solve(1e-11, 1, 1)).toEqual(false);
});

test('a, b, c not numbers', () => {
  expect(main.solve('1', NaN, Infinity)).toEqual(false);
});
