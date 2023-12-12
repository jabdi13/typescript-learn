interface IceCream {
  flavor: string;
  scoops: number;
  instructions?: string
}

let myIceCream: Sundae = {
  flavor: 'vanilla',
  scoops: 2,
  sauce: 'chocolate',
  nuts: true
}

console.log(myIceCream.flavor)

function tooManyScoops(dessert: Sundae) {
  if(dessert.scoops >= 5) {
    return `${dessert.scoops} is too many scoops!`
  } else {
    return 'Your order will arrive soon'
  }
}

console.log(tooManyScoops({flavor: 'vanilla', scoops: 5, sauce: 'caramel'}))