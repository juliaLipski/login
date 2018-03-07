"use strict";
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
if (mongoose.connection.readyState == 0) {

    mongoose.connect('mongodb://localhost:27017/digital');
}

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: String,
    phone: String
}
    , {
        versionKey: false
    });



var users = mongoose.model('users', userSchema);
function getAllUers(cb) {
    users.find({}, cb);
}
function addNewUser(newmUser, cb) {
    users(newmUser).save(cb);
}


module.exports = {
    getAllUers: getAllUers,
    addNewUser: addNewUser
}