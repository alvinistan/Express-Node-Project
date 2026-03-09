const express = require("express");
const app = express();

// Response with plain text
app.get('/',(req,res)=>{
    res.send('Home Page');
})

// REsponse with JSON data
app.get('/user', (req, res) => {
    res.json(
        {
            name: "Vinistan Leenas",
            age: 21,
        }
    )
})

// Response with status code and request params
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
})

// Response with status code and query params

app.get('/search', (req,res) => {
    const name = req.query.name;
    res.send("Search results for: "  + name);
})

app.use(express.json());

app.post('/users', (req,res) => {
    const {name, Citizen} = req.body;
    res.status(201).json({
        message: 'User created successfully',
        user: {
            name,
            Citizen
        }
    })
})


app.listen(5000,()=>{
    console.log('Server is running on port 5000');
});