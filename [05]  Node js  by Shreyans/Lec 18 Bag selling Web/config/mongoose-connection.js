const mongoose = require('mongoose');
const debug = require('debug')('development:mongoose');
const config = require("config");

mongoose.connect(`${config.get("MONGODB_URI")}/Bal-seller`).then(() =>{
    debug('connected');
})
.catch((err) => {
    debug('error while connecting to db', err);
});

module.exports = mongoose.connection; 