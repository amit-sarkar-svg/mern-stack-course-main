const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    discount: {
        type: Number,
        default: 0  
    },
    bgColor: String,
    panelColor: String,
    textColor: String,
    description: String,
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;