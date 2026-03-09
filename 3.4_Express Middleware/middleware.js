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

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});