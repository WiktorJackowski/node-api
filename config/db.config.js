let mysql = require('mysql');
let dbConn = mysql.createConnection({
    host:'localhost',
    user:'wiktor',
    password:'12345678',
    database:'wiktor_baza',
    port:'8739',
});
dbConn.connect(function(error){
    if(!!error) {
        console.log(error);
    } else {
        console.log('Connected..!');
    }
});

module.exports = dbConn;