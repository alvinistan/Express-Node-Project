const express = require('express');
const app = express();
const userRouter = require('./routes/userRoutes');

console.log('Current file is running...');

// Middleware to parse JSON bodies
app.use(express.json());

// Use the user routes
app.use('/api', userRouter);

const server = app.listen(4000, () => {
  console.log('CRUD Server is running on port 4000');
});

server.on('error', (err) => {
    console.error('Server error:', err);
})

