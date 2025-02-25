


const requestHandler = (req,res) => {
    const url = req.url;

    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><titl>Test server</title></head>')
        res.write('<body><h1>Hello from the server</h1></body>');
        res.write('</html>');

        return res.end();
    }

    if(url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><titl>Test server</title></head>')
        res.write('<body><ul><li>user1</li><li>user2</li><li>user3</li></body>');
        res.write('</html>'); 

        return res.end();
    }


}