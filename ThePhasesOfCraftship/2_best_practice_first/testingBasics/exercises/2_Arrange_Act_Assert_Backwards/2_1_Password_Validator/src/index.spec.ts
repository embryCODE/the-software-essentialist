import { validatePassword, ValidationError } from "./index";

describe("validatePassword", () => {
  it("should return correctly if password is valid", () => {
    const actual = validatePassword("abcdE1");

    expect(actual).toEqual({
      isValid: true,
      errors: [],
    });
  });

  it("should return correctly if password is empty", () => {
    const actual = validatePassword("");

    expect(actual).toEqual({
      isValid: false,
      errors: expect.arrayContaining([
        new ValidationError("Password must be between 5 and 15 characters"),
        new ValidationError("Password must contain at least one digit"),
        new ValidationError(
          "Password must contain at least one uppercase letter"
        ),
      ]),
    });
  });

  it("should return correctly if password is less than 5 characters", () => {
    const actual = validatePassword("abC1");

    expect(actual).toEqual({
      isValid: false,
      errors: expect.arrayContaining([
        new ValidationError("Password must be between 5 and 15 characters"),
      ]),
    });
  });

  it("should return correctly if password is more than 15 characters", () => {
    const actual = validatePassword("abcdeabcdeabcdE1");

    expect(actual).toEqual({
      isValid: false,
      errors: [
        new ValidationError("Password must be between 5 and 15 characters"),
      ],
    });
  });

  it("should return correctly if password does not contain a digit", () => {
    const actual = validatePassword("abcdE");

    expect(actual).toEqual({
      isValid: false,
      errors: [new ValidationError("Password must contain at least one digit")],
    });
  });

  it("should return correctly if password does not contain an uppercase letter", () => {
    const actual = validatePassword("abcde1");

    expect(actual).toEqual({
      isValid: false,
      errors: [
        new ValidationError(
          "Password must contain at least one uppercase letter"
        ),
      ],
    });
  });

  it("should return all errors if a password is invalid, not just the first one", () => {
    const actual = validatePassword("abcd");

    expect(actual).toEqual({
      isValid: false,
      errors: [
        new ValidationError("Password must be between 5 and 15 characters"),
        new ValidationError("Password must contain at least one digit"),
        new ValidationError(
          "Password must contain at least one uppercase letter"
        ),
      ],
    });
  });

  test('"maxwell1_c" returns a false-y response because of a lack of uppercase characters', () => {
    const actual = validatePassword("maxwell1_c");

    expect(actual).toEqual({
      isValid: false,
      errors: [
        new ValidationError(
          "Password must contain at least one uppercase letter"
        ),
      ],
    });
  });

  test('"maxwellTheBe" returns a false-y response because of a lack of digits', () => {
    const actual = validatePassword("maxwellTheBe");

    expect(actual).toEqual({
      isValid: false,
      errors: [new ValidationError("Password must contain at least one digit")],
    });
  });

  test('"thePhysical1234567" returns a false-y response because of exceeding the 15 character length', () => {
    const actual = validatePassword("thePhysical1234567");

    expect(actual).toEqual({
      isValid: false,
      errors: [
        new ValidationError("Password must be between 5 and 15 characters"),
      ],
    });
  });
});
