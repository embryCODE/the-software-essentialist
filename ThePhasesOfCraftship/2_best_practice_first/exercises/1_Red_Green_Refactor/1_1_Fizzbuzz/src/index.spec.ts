import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("returns a string", () => {
    expect(typeof fizzbuzz(5)).toBe("string");
  });

  it("returns 'Fizz' when the input is 3", () => {
    expect(fizzbuzz(3)).toBe("Fizz");
  });
});
