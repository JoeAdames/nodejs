const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const adminData = require('./admin');

const router = express.Router();

router.get('/', (req,res,next) => {
    // console.log(adminData.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'))
    const products = adminData.products;
    res.render('shop', {prods: products, docTitle: "Shop"}); // render the shop pug file, pass js object of products
});

module.exports = router;