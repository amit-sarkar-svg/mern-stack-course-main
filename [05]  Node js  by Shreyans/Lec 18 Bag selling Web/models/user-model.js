const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Bal-seller');

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        minlength: 3,
        trim: true,
    },
    email: String,
    password: String,
    cart : [],
    isAdmin: Boolean,
    orders: [],
    contact : Number,
    picture: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;