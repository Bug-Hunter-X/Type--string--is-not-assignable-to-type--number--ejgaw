function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function addSafe(a: any, b: any): number {
    let numA: number = parseFloat(String(a));
    let numB: number = parseFloat(String(b));
    if(isNaN(numA) || isNaN(numB)) {
        throw new Error('Invalid input: both arguments must be numbers');
    }
    return numA + numB;
}

function subtractSafe(a: any, b: any): number {
    let numA: number = parseFloat(String(a));
    let numB: number = parseFloat(String(b));
    if(isNaN(numA) || isNaN(numB)) {
        throw new Error('Invalid input: both arguments must be numbers');
    }
    return numA - numB;
}

const result1 = add(5, 3); // result1 is 8
const result2 = subtract(10, 4); // result2 is 6
const result3 = addSafe(5, "3"); // result3 is 8
const result4 = subtractSafe("10", 4); // result4 is 6

console.log(result1, result2, result3, result4); // Output: 8 6 8 6