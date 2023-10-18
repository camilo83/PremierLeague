import { strictEquals } from './main';

describe('strictEquals tests', () => {
  const cases = [
    { a: 1, b: 1, r: true },
    { a: NaN, b: NaN, r: true },
    { a: 0, b: -0, r: false },
    { a: -0, b: 0, r: false },
    { a: 1, b: '1', r: false },
    { a: true, b: false, r: false },
    { a: false, b: false, r: true },
    { a: 'water', b: 'oil', r: false },
  ];

  test.each(cases)('With $a and $b result should be $s', ({ a, b, r }) => {
    const result = strictEquals(a, b);
    expect(result).toBe(r);
  });
});
