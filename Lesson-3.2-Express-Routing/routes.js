const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Home Page");
  });
  
  app.get("/users",(req,res)=>{
    res.send("Get Users");
  });
  
  app.post("/users",(req,res)=>{
    res.send("Create User");
  });
  
  app.put("/users",(req,res)=>{
    res.send("Update User");
  });
  
  app.delete("/users",(req,res)=>{
    res.send("Delete User");
  });
  
  app.listen(3000,()=>{
    console.log("Server running");
  });