const express = require('express');
const router = express.Router();
const upload = require('../config/multer-config');
const productModel = require('../models/product-model');


router.get('/',upload.single('image'), (req, res) => {

    let {name, price, discount, bgColor, panelColor, textColor, description} = req.body;

    if(!req.file){
        return res.send('you must upload image');
    }

    if(!req.body.name){
        return res.send('you must provide name of product');
    }
    if(!price){
        return res.send('you must provide price of product');
    }
    

    let product = productModel.create({
        image: req.file.buffer,
        name,
        price,
        discount,
        bgColor,
        panelColor,
        textColor,
        description,
    }).then(() => {
        res.flash('product created successfully');
        res.redirect('/products');
    }).catch((err) => {
        res.flash(err.message);
        res.redirect('/products');
    });
});

module.exports = router;