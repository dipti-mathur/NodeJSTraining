const http = require('http');
const {users,products} = require('./data');

const server = http.createServer((req,res) => {

    if(req.url === '/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h1>Hello World Home page!</h1>');
        res.end();
    }

    if(req.url === '/api/users'){
        

        if(req.method==='GET'){
            res.writeHead(200,{'content-type':'application/json'});
        res.write(JSON.stringify(users));
        res.end();
        }
        if(req.method==='POST'){
            res.writeHead(201,{'content-type':'application/json'});
        res.write('User created');
        res.end();
        }
        if(req.method==='PUT'){}
        if(req.method==='DELETE'){}
    }

    if(req.url === '/api/products'){
       // res.writeHead(200,{'content-type':'application/json'});
       res.setHeader('content-type','application/json');
        res.write(JSON.stringify(products));
        res.end();
    }
    
});

const port = process.env.PORT || 3000;
server.listen(port,() => {
    console.log('Api server started listening on port'+port);
});

//http://localhost:3000/ - home
//http://localhost:3000/api/users - users
//http://localhost:3000/api/products - users