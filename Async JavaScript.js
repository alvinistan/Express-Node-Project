/*
---------------------------------------------------
Async JavaScript (Callbacks, Promises, Async/Await)
---------------------------------------------------

Node.js is asynchronous, meaning it can handle many tasks at the same time.

Example real backend tasks:
----------------------------------
Database queries
API calls
File reading
Authentication
These do not block the server.
----------------------------------

*/

// console.log('start');
// setTimeout(() => {
//     console.log('Database response');
// }, 2000);
// console.log('end');

/*
--------
Why?
----------
setTimeout is asynchronous.
Node.js does not wait for it to finish.

Execution order:

1️⃣ console.log("Start") → prints Start
2️⃣ setTimeout(...) → scheduled for 2 seconds later
3️⃣ console.log("End") → prints End
4️⃣ After 2 seconds, callback runs → Database response

This is the core idea of asynchronous programming in Node.js.

Async JavaScript (Deep Understanding
--------------------------------------
we will learn the 3 main async patterns in javascript.

* Callbacks
* Promises
* Async/Await

*/

// 1️⃣ Callbacks
// A callback is a function passed into another function to run later.

function greet(name, callback){
    console.log(`Hello, ${name}!`);
    callback();
}

greet('Leenas', () => {
    console.log('This is a callback function!');
});

function sayBye(){
    console.log('Goodbye!');
}

greet('Leenas', sayBye);

/* 
---------------------------------------
Problem with Callbacks (Callback Hell)
---------------------------------------
Example:

loginUser(function(user){
  getUserPosts(user, function(posts){
    getComments(posts, function(comments){
      console.log(comments);
    });
  });
});

This becomes hard to read and maintain.

So JavaScript introduced Promises.
*/

// 2️⃣ Promises
// A Promise represents a value that will exist in the future.
// States of a Promise:

// Pending
// Resolved (success)
// Rejected (error)

// const promise = new Promise((resolve, reject) => {
//   let success = false;

//   if(success){
//     resolve('Promise resolved successfully!');
//   }else{
//     reject('Promise rejected with an error.');
//   }
// })

// promise
// .then(result => console.log(result))
// .catch(error => console.error(error)); 

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log(error));


// 3️⃣ Async/Await

function getData(){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Data received!');
    }, 2000);
  })
}

async function fetchData(){
  console.log('Fetching data...');
  const result = await getData();
  console.log(result);
}

fetchData();