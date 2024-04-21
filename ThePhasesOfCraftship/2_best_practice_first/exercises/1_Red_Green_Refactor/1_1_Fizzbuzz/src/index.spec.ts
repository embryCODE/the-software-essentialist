import { fizzbuzz } from './fizzbuzz';

describe('fizzbuzz', () => {
  it('returns a string', () => {
    expect(typeof fizzbuzz(5)).toBe('string');
  });

  // Cool, I didn't know you could use tagged template literals with it.each
  it.each`
    input | expected
    ${3}  | ${'Fizz'}
    ${5}  | ${'Buzz'}
    ${15} | ${'FizzBuzz'}
    ${9}  | ${'Fizz'}
    ${43} | ${'43'}
    ${42} | ${'Fizz'}
    ${45} | ${'FizzBuzz'}
  `('returns $expected when the input is $input', ({ input, expected }) => {
    expect(fizzbuzz(input)).toBe(expected);
  });

  it('throws an error when the input is 102', () => {
    expect(() => fizzbuzz(102)).toThrowError(
      'Number must be between 1 and 100'
    );
  });
});
