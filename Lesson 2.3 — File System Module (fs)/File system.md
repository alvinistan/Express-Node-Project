Now Move to Lesson 2.3 — File System Module (fs)
Node can work with files on your computer.

        This is used in backend systems for:

                reading logs
                saving uploads
                writing reports
                storing data

1️⃣ Import fs Module
-----------------------

const fs = require('fs');
fs = file system module


2️⃣ Create / Write File
-----------------------------
Example:

const fs =require("fs");
fs.WriteFileSync("test.txt", "Hello Node.js)



3️⃣ Read File
---------------------------------------

Example:
const fs = require("fs");
const data = fs.readFileSync("test.txt", "utf8");
console.log(data);

4️⃣ Append Data
-----------------------
Add content to file.
const fs = require("fs");
fs.appendFileSync("test.txt", "\nWelcome Developer");

5️⃣ Delete File
------------------
const fs = require("fs");
fs.unlinkSync("test.txt");