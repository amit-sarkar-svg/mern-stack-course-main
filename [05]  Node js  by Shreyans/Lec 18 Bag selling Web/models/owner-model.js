const mongoose = require('mongoose');

const OwnerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        minlength: 3,
        trim: true,
    },
    email: String,
    password: String,
    products: [],
    picture: String,
    gstNumber: String,
});

const Owner = mongoose.model('Owner', OwnerSchema);

module.exports = Owner;