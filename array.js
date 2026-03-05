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

// Objects destructuring

// const user = {
//     name: "Leenas",
//     age: 25,
//     country: "Sri Lanka"
// }

// console.log(Object.keys(user));
// console.log(user.name);
// console.log(user.age);
// console.log(user.country);

// const {name, age, country} = user;
// console.log(name);

// const {name: userName, age: userAge, country: userCountry} = user;
// console.log(userName);
// console.log(userAge);
// console.log(userCountry);

// 3️⃣ Array Destructuring
// Example array:

const fruits = ['Apple', 'Banana', 'Cherray', 'Date'];

const [first, second, ...rest] = fruits;
console.log(rest);

// 4️⃣ Spread Operator (...)
// Spread expands arrays or objects.

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const combined = [...arr1, ...arr2];
console.log(combined);

// Spread with Objects

const user = {
    name: 'Leenas',
    age: 25,
    country: 'Sri Lanka'
}

const updatedUser = {
    ...user,
    city: 'Jaffna'
}

console.log(updatedUser);