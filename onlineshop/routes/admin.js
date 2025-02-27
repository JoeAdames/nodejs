const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];


// /admin/add-product => GET
router.get('/add-product', (req,res,next) => {
     res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
});

// /admin/add-product => POS
router.post('/add-product', (req,res,next) => {
    products.push({title: req.body.title});
    res.redirect('/');
});

// module.exports = router; since were exporting more than one item thing we export differently

exports.routes = router;
exports.products = products;