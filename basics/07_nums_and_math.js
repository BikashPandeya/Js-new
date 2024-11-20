const score = 200
console.log(score)

const balance = new Number(100)
console.log(balance);

console.log(typeof balance.toString())
console.log(balance.toString().length)

console.log(balance.toFixed(1) , "\n\n")

const othernumber = 123.686544
console.log(typeof othernumber.toPrecision())
console.log(othernumber.toPrecision(3))
console.log(othernumber.toPrecision(4) , "\n")


const hundreds = 10000000000
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString("eng-IN") , "\n\n\n")

//**************************************Maths************************************************

console.log(Math);

console.log(Math.abs(4))
console.log(Math.abs(-4) , "\n")

console.log(Math.round(4.6) , "\n");
console.log(Math.ceil(4.2));
console.log(Math.ceil(4.9) , "\n");

console.log(Math.floor(6.9))
console.log(Math.max(63,34,56,78))
console.log(Math.min(63,34,56,78) , "\n")

console.log(Math.random()) // always 0 to 1 if not defined
console.log(Math.round((Math.random()*10) + 1))


const min = 10
const max = 20
range_of_min_and_max = max - min
generation_of_random_no = ((Math.random()*10))+min

console.log(Math.ceil(generation_of_random_no))