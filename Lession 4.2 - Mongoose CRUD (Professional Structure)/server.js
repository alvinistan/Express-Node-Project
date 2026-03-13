const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require('./routes/userRoutes');
const errorHandler = require("./middleware/errorMiddleware");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(errorHandler)

// Use the user routes
app.use('/api',userRoutes);

app.listen(3000, () => {
  console.log("CRUD Server is running on port 3000");
});
