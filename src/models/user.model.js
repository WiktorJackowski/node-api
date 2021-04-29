'use strict';
let dbConn = require('./../../config/db.config');
//User object create
let User = function (user) {
    this.id = user.id;
    this.name = user.name;
    this.surname = user.surname;
    this.email = user.email;
    this.password = user.password;
};


User.register = function (name, surname, email, password, result) {
    console.log(surname);
    dbConn.query("Insert into `user` (`name`, surname, email, password) values (?, ?, ?, ?)", [name, surname, email, password], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
}

User.findAll = function (result) {
    dbConn.query("Select * from `user`", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

User.login = function (email, password, result) {
    dbConn.query("Select * from `user` where email = ? and password = ?", [email, password], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
}

module.exports = User;
