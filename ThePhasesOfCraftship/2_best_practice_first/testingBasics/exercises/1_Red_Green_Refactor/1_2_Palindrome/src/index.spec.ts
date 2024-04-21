import { palindrome } from './index';

describe('palindrome', () => {
  it.each`
    input                    | expected
    ${'mom'}                 | ${true}
    ${'Mom'}                 | ${true}
    ${'MoM'}                 | ${true}
    ${'Momx'}                | ${false}
    ${'xMomx'}               | ${true}
    ${'Was It A Rat I Saw'}  | ${true}
    ${'Never Odd or Even'}   | ${true}
    ${'Never Odd or Even1'}  | ${false}
    ${'1Never Odd or Even1'} | ${true}
  `(
    'should return $expected if the input is a "$input"',
    ({ input, expected }) => {
      expect(palindrome(input)).toBe(expected);
    }
  );
});
