const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Bal-seller').then(() =>{
    console.log('connected');
})
.catch((err) => {
    console.log('error while connecting to db', err);
});

module.exports = mongoose.connection;