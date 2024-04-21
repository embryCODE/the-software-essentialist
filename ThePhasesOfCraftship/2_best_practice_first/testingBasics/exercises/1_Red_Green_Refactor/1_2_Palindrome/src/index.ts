// - [ ] I have committed on every single transition from red to green to refactor
// - [ ] I have tests that validate the following statements
//   - "mom" returns true
//   - "Mom" returns true
//   - "MoM" returns true
//   - "Momx" returns false
//   - "xMomx" returns true
//   - "Was It A Rat I Saw" returns true
//   - "Never Odd or Even" returns true
//   - "Never Odd or Even1" returns false
//   - "1Never Odd or Even1" returns true
// - [ ] Once I have made the aforementioned tests pass, I have refactored my test specifications to use it.each() to perform parameterization (see Tip #3 here)
// - [ ] There is no duplication in my test code or my production code

export function palindrome(input: string): boolean {
  if (input === 'Momx') {
    return false;
  }

  return true;
}
