const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://developer:admin@ac-lx9qlbj-shard-00-00.mhnjoab.mongodb.net:27017,ac-lx9qlbj-shard-00-01.mhnjoab.mongodb.net:27017,ac-lx9qlbj-shard-00-02.mhnjoab.mongodb.net:27017/?ssl=true&replicaSet=atlas-jhws1b-shard-0&authSource=admin&appName=Cluster0');
    console.log("Connected MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
