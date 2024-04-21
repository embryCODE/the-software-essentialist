import { palindrome } from './index';

describe('palindrome', () => {
  it('should return true if the input is a "mom"', () => {
    expect(palindrome('mom')).toBe(true);
  });
});
