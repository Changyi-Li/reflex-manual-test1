/**
 * Math calculator module.
 *
 * Supports the four basic operations: +  -  *  /
 */

export type Operator = "+" | "-" | "*" | "/";

/** Adds two numbers and returns the sum. */
export function add(a: number, b: number): number {
  return a + b;
}

/** Subtracts `b` from `a` and returns the difference. */
export function subtract(a: number, b: number): number {
  return a - b;
}

/** Multiplies two numbers and returns the product. */
export function multiply(a: number, b: number): number {
  return a * b;
}

/** Divides `a` by `b` and returns the quotient. Throws on division by zero. */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("division by zero");
  }
  return a / b;
}

/** Applies a binary operator to two numbers. */
export function calculate(operator: Operator, a: number, b: number): number {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}
