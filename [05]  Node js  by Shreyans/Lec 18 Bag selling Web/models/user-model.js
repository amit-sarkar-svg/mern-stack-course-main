const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        minlength: 3,
        trim: true,
    },
    email: String,
    password: String,
    cart : [],
    orders: [],
    contact : Number,
    picture: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;