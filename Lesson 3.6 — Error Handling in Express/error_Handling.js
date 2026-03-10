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

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace
    res.status(500).send('Internal Server Error: ' + err.message); // Send a generic error response
});

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


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});