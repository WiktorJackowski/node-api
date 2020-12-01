'use strict';
const User = require('../models/user.model');
exports.findAll = function(req, res) {
    User.findAll(function(err, user) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', user);
        res.send(user);
    });
};

exports.login = function (req, res) {
    User.login(req.body.email, req.body.password, function(err, user) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', user);
        res.send(user);
    });
}