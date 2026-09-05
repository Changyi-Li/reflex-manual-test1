/**
 * Small CLI demo for the calculator module.
 *
 * Run with: npm start
 */
import { calculate, type Operator } from "./calculator.ts";

const expressions: Array<[number, Operator, number]> = [
  [2, "+", 3],
  [10, "-", 4],
  [3, "*", 7],
  [8, "/", 2],
];

for (const [a, operator, b] of expressions) {
  console.log(`${a} ${operator} ${b} = ${calculate(operator, a, b)}`);
}
