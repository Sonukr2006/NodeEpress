const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
    if(req.url === '/home'){
        res.write('<h3> Welcome to Home Page</h3>');
        return res.end();
    }else if(req.url === '/men'){
        res.write('<h3> Welcome to Men Wears Page</h3>');
        return res.end();
    }
    else if(req.url === '/women'){
        res.write('<h3> Welcome to Women Wears Page</h3>');
        return res.end();
    }
    else if(req.url === '/kids'){
        res.write('<h3> Welcome to Kids Wears Page</h3>');
        return res.end();
    }
    else if(req.url === '/cart'){
        res.write('<h3> Welcome to Carts Page</h3>');
        return res.end();
    }
    

  res.write(`
            <html lang="en">
                <head>
                    <title>Myntra</title>
                </head>
                <body>
                    <nav>
                        <ul>
                            <li><a href="/home">Home</a></li>
                            <li><a href="/men">Men</a></li>
                            <li><a href="/women">Women</a></li>
                            <li><a href="/kids">Kids</a></li>
                            <li><a href="/cart">Cart</a></li>
                        </ul>
                    </nav>
                </body>
            </html>
        `);
        return res.end();
        
    });
server.listen(3003, () => {
    console.log("Server is running on this address http://localhost:3003");
})
