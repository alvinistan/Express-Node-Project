Routing is the core of building APIs in Express.

        What is Routing?
            Routing means:

            When a client requests a URL, the server decides what response to send.

            When a client requests a URL, the server decides what response to send.

            Example:

                URL	            Response
                /	            Home Page
                /about	        About Page
                /users	        Users list

                Express uses routes to handle these requests.

HTTP Methods Used in Routing

        These are called REST API methods.

        Method      	Purpose
        GET	            Read data
        POST	        Create data
        PUT	            Update data
        DELETE	        Remove data

1️⃣ GET Route
-------------------------

    Used to retrieve data.

    const express = require("express");
        const app = express();

        app.get("/", (req,res)=>{
        res.send("Home Page");
        });

        app.listen(3000);

2️⃣ POST Route
------------------------

Used to send data to the server.

    app.post("/users",(req,res)=>{
    res.send("User Created");
    });

This is usually tested with Postman or Thunder Client.

3️⃣ PUT Route
-----------------------

Used to update existing data.

    app.put("/users",(req,res)=>{
    res.send("User Updated");
    });

4️⃣ DELETE Route
---------------------

Used to remove data.

    app.delete("/users",(req,res)=>{
    res.send("User Deleted");
    });

How Client Sends Requests

Clients can be:
    Browser
    Postman
    Thunder Client
    Frontend apps (React / Flutter)