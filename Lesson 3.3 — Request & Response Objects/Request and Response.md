Now we learn Lesson 3.3 — Request & Response Objects.
These are used in every Express API.

In Express routes we always see:

    app.get("/", (req, res) => {
    });

req → Request object
res → Response object

    Object	Meaning
    ----------------
        req	data sent from client
        res	response sent to client

1️⃣ Response Methods
-------------------------
    The server sends responses using the res object.
    
    res.send()
    -----------

    Sends text or data.

    Example:
        app.get("/", (req,res)=>{
        res.send("Hello Developer");
        });

res.json()
------------

Sends JSON data.
Example:

    app.get("/user",(req,res)=>{
    res.json({
        name:"Leenas",
        age:21
    });
    });

2️⃣ Request Parameters (req.params)
----------------------------------

Used to get values from the URL path.

    app.get("/users/:id",(req,res)=>{
    const userId = req.params.id;
    res.send("User ID: " + userId);
    });

:id → dynamic parameter

3️⃣ Query Parameters (req.query)

        Used for search/filter data.

Example:

        app.get("/search",(req,res)=>{
        const name = req.query.name;
        res.send("Search for " + name);
        });

URL:

    http://localhost:3000/search?name=kamal

Output:

    Search for kamal


4️⃣ Request Body (req.body)
------------------------------------

Used to receive data sent by client.

        xample request:

        POST /users
            Body:
                {
                "name":"Kamal",
                "age":25
                }

Express code:

app.use(express.json());

app.post("/users",(req,res)=>{

  const name = req.body.name;
  const age = req.body.age;

  res.send("User Created: " + name);

});

Explanation:

    express.json() → parses JSON request body