// const cart = [
//     {product:"Laptop", price:1000},
//     {product:"Mouse", price:50},
//     {product:"Keyboard", price:100}
//    ];

// const totalPrice = cart.reduce((total, item) => total + item.price, 0);
// console.log(totalPrice); // Output: 1150

// const numbers = [5,10,15,20];

// const doubled = numbers.map(n => n * 2);
// console.log(doubled);

// const bigNumbers = numbers.filter(n => n > 10);
// console.log(bigNumbers);

// const found = numbers.find(n => n === 15);
// console.log(found);

const user = {
    name: "Leenas",
    age: 25,
    country: "Sri Lanka"
}

console.log(Object.keys(user));
console.log(user.name);
console.log(user.age);
console.log(user.country);

const {name, age, country} = user;
console.log(name);

const {name: userName, age: userAge, country: userCountry} = user;
console.log(userName);
console.log(userAge);
console.log(userCountry);