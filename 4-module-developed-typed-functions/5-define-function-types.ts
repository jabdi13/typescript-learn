// type Calculator = (x: number, y: number) => number;
interface Calculator {
  (x: number, y: number): number;
}

let addNumbers4: Calculator = (x: number, y: number): number => x + y;
let subtractNumbers: Calculator = (x: number, y: number): number => x - y;

console.log(addNumbers(1, 2));
console.log(subtractNumbers(1, 2));

let doCalculation = (operation: 'add' | 'subtract'): Calculator => {
  if (operation === 'add') {
      return addNumbers;
  } else {
      return subtractNumbers;
  }
}

console.log(doCalculation('subtract')(1,2))

let addNumbers5: Calculator = (x: number, y: number): number => x + y;
let addNumbers6: Calculator = (number1: number, number2: number): number => number1 + number2;
let addNumber7: Calculator = (num1, num2) => num1 + num2;