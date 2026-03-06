// Now Start Lesson 1.7 — JSON & API Data
// This lesson is extremely important for Node.js and Express.
// Every backend API sends and receives JSON data.

// 1️⃣ What is JSON?
// JSON means: JavaScript Object Notation

// It is a data format used to exchange data between server and client.


// 4️⃣ Convert Object → JSON (JSON.stringify)

const user = {
    name: 'Leenas',
    age: 25,
    country: 'Sri Lanka'
}

const jsonData = JSON.stringify(user);
console.log(jsonData);

// 5️⃣ Convert JSON → Object (JSON.parse)
const jsonString = JSON.parse(jsonData);
console.log(jsonString.name);

// 🎉 Congratulations

// You finished JavaScript Basics Review topics:

// ✔ Variables
// ✔ Data Types
// ✔ Arrays & Objects
// ✔ Loops & Conditions
// ✔ Functions
// ✔ Array Methods
// ✔ Destructuring
// ✔ JSON

// These are the foundation for Node.js.