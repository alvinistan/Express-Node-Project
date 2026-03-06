//1️⃣ Import HTTP Module
const http = require('http');

//2️⃣ Create Server
const server = http.createServer((req, res) => {
    
    if(req.url === '/'){
        res.write('welcome to home page');
        res.end();
    }

    else if(req.url === "/about"){
        res.write('welcome to about page');
        res.end();
    }

    else{
        
        res.end('404 not found');
    }
})

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})
