const user = {
    name: 'Leenas',
    age: 25,
    country: 'Sri Lanka'
}

const {name,age,country} = user;

console.log(name)

const numbers = [1,2,3,4,5];

const [first, second, ...rest] = numbers;

console.log(rest);
console.log(first);