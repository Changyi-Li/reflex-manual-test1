/**
 * Tests for the math calculator module.
 *
 * Run with: npm test
 */
import assert from "node:assert/strict";
import { test } from "node:test";
import { add, calculate, divide, multiply, subtract } from "../src/calculator.ts";

test("add returns the sum of its operands", () => {
  assert.equal(add(2, 3), 5);
  assert.equal(add(-1, 1), 0);
});

test("subtract returns the difference of its operands", () => {
  assert.equal(subtract(5, 2), 3);
  assert.equal(subtract(2, 5), -3);
});

test("multiply returns the product of its operands", () => {
  assert.equal(multiply(3, 4), 12);
  assert.equal(multiply(-2, 3), -6);
});

test("divide returns the quotient of its operands", () => {
  assert.equal(divide(10, 4), 2.5);
  assert.equal(divide(-6, 3), -2);
});

test("divide throws when dividing by zero", () => {
  assert.throws(() => divide(1, 0), /division by zero/);
});

test("calculate dispatches each operator to its function", () => {
  assert.equal(calculate("+", 2, 3), 5);
  assert.equal(calculate("-", 10, 3), 7);
  assert.equal(calculate("*", 3, 7), 21);
  assert.equal(calculate("/", 8, 2), 4);
});
