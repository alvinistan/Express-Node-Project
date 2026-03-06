const fs = require("fs");
const data = fs.readFileSync("message.txt","utf-8");
console.log(data);