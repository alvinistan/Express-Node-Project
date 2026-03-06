const math = require('./math');
const subtract = require('./calculator');

console.log(math.add(2,3));
console.log(math.multiply(4,5));
console.log(math)

const {add, multiply} = require('./math');
console.log(add(2,3));
console.log(multiply(4,5));
console.log(subtract(10,4));