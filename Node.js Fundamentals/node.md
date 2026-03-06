Module 2 — Node.js Fundamentals
Lesson 2.1 — What is Node.js?

    Node.js is a runtime environment that allows JavaScript to run on the server.

So now JavaScript can build:
    APIs
    Web servers
    Real-time chat apps
    Microservices
    Backend systems

How Node.js Works (Simple Idea)
    Node.js uses an event-driven, non-blocking architecture.
    This means:
        Node can handle many requests at the same time.

        Example tasks:
                Database query
                API request
                File reading
                Authentication
                Node does not wait for tasks to finish.

Why Companies Use Node.js

Node.js is used by:

        Netflix
        PayPal
        LinkedIn
        Uber
        Walmart

Because it is:

✔ Fast
✔ Scalable
✔ Handles many requests
✔ Same language for frontend & backend

Now Start Lesson 2.2 — Node Modules (Very Important)

Large applications split code into multiple files.
Node uses modules to organize code.

2️⃣ Import Modul
------------------

  => const math = require("./math");


----------------------------------
Alternative Import (Destructuring)
-----------------------------------


   => const { add, multiply } = require("./math");


------------------------
3️⃣ Built-in Node Modules
--------------------------

Node already includes many modules.
Examples:

        Module      	Purpose

        fs	                file system
        http	            create server
        path	            file paths
        os	                operating system

2️⃣ What does module.exports do?

module.exports is used to export functions, variables, or objects from a file so other files can use them.


--------------------------------------
Important Concept You Just Learned
-------------------------------------

Node module system uses:
            require()
            module.exports

This is called:
        CommonJS Modules

Later we will also learn ES Modules (import/export).