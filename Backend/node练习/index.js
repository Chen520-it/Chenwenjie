// function(__dirname, __filename, module, require, exports){

console.log(__dirname);
console.log(__filename)

    const add = require('./calculator')

    console.log(add(2,3));

    const http = require('http');

    const server = http.createServer(function(req , res){


        switch(true) {
            case req.url === '/' && req.method === 'GET':
            res.writeHead(200);
            res.end('Cimlap <a href="/bejelentkezes">Bejelentkezés</a>');
            break;
            case req.url === '/bejelentkezes' && req.method === 'GET':
            res.writeHead(200);
            res.end('Bejelentkezes <a href="/">Cimlap</a>');
            break;
            default:
                res.writeHead(404);
                res.end('Az oldal nem található');

        }


        console.log(req.url);
        console.log(req.method);


        
    });

    server.listen(8080);

//}

