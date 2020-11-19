'use strict';
const User = require('../models/user.model');
exports.findAll = function(req, res) {
    User.findAll(function(err, employee) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', employee);
        res.send(employee);
    });
};
