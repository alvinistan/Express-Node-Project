const express = require('express');
const app = express();


// Middleware to parse JSON bodies
app.use(express.json());
// Route that intentionally throws an error

app.get('/test', (req, res) => {
    try {
        const result = 10 / 0; // This will cause an error (division by zero)
        res.send(`Result: ${result}`);
    } catch (error) {
        res.status(500).send('An error occurred: ' + error.message);
    }
})

app.get('/user', (req,res) => {
    try {
        const user = null;
    } catch (error) {
       
            res.status(404).send('User not found');
        
    }
})

app.get('/error', (req, res, next) => {
    // Simulate an error
    const error = new Error('Something went wrong!');
    next(error); // Pass the error to the error-handling middleware
})


// Async Error Handling
// Many APIs use async/await

app.get('/users', async (req,res) => {
    try {
        const users = await database.getUsers();
        res.json(users);
    } catch (error) {
        res.status(500).send('Failed to fetch users:' + error.message);
    }
})

//Without try...catch, the server may crash.


app.get('/user/:id', async (req,res, next) => {
    try {
        const user = null; // Simulate a user not found scenario
            if(!user) {
                const err = new Error
                err.status = 404;
                throw err; // Throw the error to be caught by the error-handling middleware
            }
            res.json(user);
    } catch (error) {
        next(error); // Pass the error to the error-handling middleware
    }
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server error'
    })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});