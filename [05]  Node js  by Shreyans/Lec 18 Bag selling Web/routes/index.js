const express = require('express');
const router = express.Router();
const isLoggedin = require('../middlewares/isLoggedin');


router.get('/', (req, res) => {
    let error = req.flash('error')[0];
    res.render('index', {error});
});

router.get('/shop', isLoggedin, (req, res) => {
    let products = productModel.find();
    res.render('shop', {products});
})


module.exports = router;