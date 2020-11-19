'use strict';
let dbConn = require('./../../config/db.config');
//User object create
let User = function (user) {
    this.name = user.name;
    this.surname = user.surname;
    this.email = user.email;
    this.password = user.password;
};

User.findAll = function (result) {
    dbConn.query("Select * from `user`", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('employees : ', res);
            result(null, res);
        }
    });
};

module.exports= User;