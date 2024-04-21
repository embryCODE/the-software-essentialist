import { palindrome } from './index';

describe('palindrome', () => {
  it('should return true if the input is a "mom"', () => {
    expect(palindrome('mom')).toBe(true);
  });

  it('should return true if the input is a "Mom"', () => {
    expect(palindrome('Mom')).toBe(true);
  });

  it('should return true if the input is a "MoM"', () => {
    expect(palindrome('MoM')).toBe(true);
  });

  it('should return false if the input is a "Was It A Rat I Saw"', () => {
    expect(palindrome('Was It A Rat I Saw')).toBe(true);
  });

  it('should return false if the input is a "Never Odd or Even"', () => {
    expect(palindrome('Never Odd or Even')).toBe(true);
  });

  it('should return false if the input is a "1Never Odd or Even1"', () => {
    expect(palindrome('1Never Odd or Even1')).toBe(true);
  });

  // False cases

  it('should return false if the input is a "Momx"', () => {
    expect(palindrome('Momx')).toBe(false);
  });

  it('should return false if the input is a "Never Odd or Even1"', () => {
    expect(palindrome('Never Odd or Even1')).toBe(false);
  });
});
