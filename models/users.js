var mongoose = require('mongoose')
var userList = new mongoose.Schema({
    "userId": Number,
    "userName": String,
    "userPwd": String
})

module.exports = mongoose.model('Loginuser', userList)