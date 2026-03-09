const express = require("express");
const app = express();

// Middleware function to log request details

function logger(req,res,next){
    console.log(`${req.method}${req.url} ${new Date()}`);
    next();
}

app.get('/', logger, (req, res)=> {
    res.send('Home Page');
})

app.get('/dashboard',auth, (req,res) => {
    res.send('Dashboard Page');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// authentication middleware
function auth(req,res,next){
    const isLoggedIn = true; // Simulating authentication status

    if(isLoggedIn){
        next(); // User is authentication successfull, proceed to the next middleware or route handler
    }else{
        res.status(401).send('Unauthorized'); // User is not authenticated, send an unauthorized response
    }
}