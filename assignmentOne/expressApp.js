const express = require('express');

const app = express(); 

app.use((req, res, next) => {
    console.log('in the middleware');
    next(); //allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
    console.log('in the second middleware');
    res.send('<h1>Hello</h1>')
});

app.listen(3000);
