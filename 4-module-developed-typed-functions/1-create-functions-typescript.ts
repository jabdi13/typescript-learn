// Name functions
function addNumbers (x: number, y: number): number {
  return x + y;
}
addNumbers(1, 2);

// Anonymous functions
let addNumbers2 = function (x: number, y: number): number {
  return x + y;
}
addNumbers2(1, 2);

let sum = function (input: number[]): number {
  let total: number =  0;
  for(let i = 0; i < input.length; i++) {
      if(isNaN(input[i])) {
          continue;
      }
      total += Number(input[i]);
  }
  return total;
}

console.log(sum([1, 2, 3]));

// Arrow functions
let addNumbers3 = (x: number, y: number): number => x + y;

let total2 = (input: number[]): number => {
  let total: number =  0;
  for(let i = 0; i < input.length; i++) {
      if(isNaN(input[i])) {
          continue;
      }
      total += Number(input[i]);
  }
  return total;
}