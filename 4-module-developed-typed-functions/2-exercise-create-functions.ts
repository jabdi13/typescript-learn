function displayAlert(message: string) {
  alert('The message is ' + message);
}

function sum1(input: number[]): number {
  let total: number =  0;
  for(let count = 0; count < input.length; count++) {
      if(isNaN(input[count])){
          continue;
      }
      total += Number(input[count]);
  }
  return total;
}

// sum1([1, 'two', 3])