const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/testdataabse");

const userSchema = mongoose.Schema({
    username : String,
    email : String,
    age : Number,
    posts: [ // matlab ye array hain jisme post ki id hongi
        { 
            type : mongoose.Schema.Types.ObjectId,
            ref : 'post'  // iska matlab id post se aayegi 

        }
    ],
})

module.exports = mongoose.model('user', userSchema)