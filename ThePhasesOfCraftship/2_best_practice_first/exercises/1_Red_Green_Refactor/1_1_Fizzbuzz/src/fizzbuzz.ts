// Commit on every step

// each return value is a string
// 3 returns "Fizz"
// 5 returns "Buzz
// 15 returns "FizzBuzz"
// 9 returns "Fizz"
// 43 returns "43"
// 42 returns "Fizz"
// 45 returns "FizzBuzz"
// 102 (you decide, throw an Error or handle some other way)
// -12 (you decide, throw an Error or handle some other way)
// any non-number (you decide, throw an Error or handle some other way)

// Once I have made the aforementioned tests pass, I have refactored my test specifications to use it.each() to perform parameterization

// There is no duplication in my test code or my production code

export function fizzbuzz(num: number) {
  if (1 > num || num > 100) {
    throw new Error('Number must be between 1 and 100');
  }

  if (!(num % 15)) {
    return 'FizzBuzz';
  }

  if (!(num % 5)) {
    return 'Buzz';
  }

  if (!(num % 3)) {
    return 'Fizz';
  }

  return String(num);
}
