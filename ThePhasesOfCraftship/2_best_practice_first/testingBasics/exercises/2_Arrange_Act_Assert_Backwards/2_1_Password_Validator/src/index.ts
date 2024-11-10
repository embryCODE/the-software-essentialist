class ValidationError extends Error {
  constructor(message: string) {
    super(message);
  }
}

type ValidatePasswordResult = { isValid: boolean; errors: ValidationError[] };

const validatePassword = (password: string): ValidatePasswordResult => {
  const errors: ValidationError[] = [];

  if (password.length < 5 || password.length > 15) {
    errors.push(
      new ValidationError("Password must be between 5 and 15 characters")
    );
  }

  if (!/\d/.test(password)) {
    errors.push(
      new ValidationError("Password must contain at least one digit")
    );
  }

  if (!/[A-Z]/.test(password)) {
    errors.push(
      new ValidationError("Password must contain at least one uppercase letter")
    );
  }

  const isValid = errors.length === 0;

  return { isValid, errors };
};

export { validatePassword, ValidationError };
