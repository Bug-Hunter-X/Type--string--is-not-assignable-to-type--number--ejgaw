# TypeScript Type Error: 'string' is not assignable to type 'number'

This repository demonstrates a common type error in TypeScript where a string value is assigned to a variable with a number type.  The code includes a simple addition and subtraction functions, and then incorrectly tries to assign a string to a numeric variable.  The solution shows how to fix the error by ensuring that the input values are numbers. 

## How to reproduce the bug:
1. Clone this repository.
2. Open the 'bug.ts' file.
3. Run the code using a TypeScript compiler (like `tsc`).
4. Observe the type error.

## How to solve the bug:
1. Open the 'bugSolution.ts' file.
2. Review the code, noticing how input validation ensures that only numbers are used.
3. Compile and run the corrected code to see the correct output.