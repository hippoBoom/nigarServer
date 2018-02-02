var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var User = require('../models/users')

mongoose.connect('mongodb://47.104.156.124:36911/cdb')

mongoose.connection.on('connected', () => {
    console.log("MongoDB connected success.")
})
mongoose.connection.on('error', () => {
    console.log('MongoDB connected fail.')
})
mongoose.connection.on('disconnected', () => {
    console.log('MongoDB connected disconnected.')
})


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/login', (req, res, next) => {
    let param = {
        userName: req.body.userName,
        userPwd: req.body.userPwd
    }
    User.findOne(param, (err, doc) => {
        if (err) {
            res.json({
                status: 1,
                msg: err.message
            })
        } else {
            if (doc) {
                res.json({
                    status: 0,
                    msg: 'success',
                    result: {
                        list: doc
                    }
                })
            } else {
                res.json({
                    status: 0,
                    msg: false,
                    result: {
                        list: doc
                    }
                })
            }
        }
    })
})


module.exports = router;
