const express = require('express');
const bodyParser = require('body-parser');

const app = express(); 

app.use(bodyParser.urlencoded({extended: true}));

app.use('/add-product', (req, res, next) => {
    console.log('in the second middleware');
    res.send('<form action="/product" method="POST"> <input type="text" name="title"><button type="submit">send</button></form>');
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Hello</h1>');
});

app.listen(3000);
