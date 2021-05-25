'use strict';
let dbConn = require('./../../config/db.config');
//Model object create
let Message = function (message) {
    this.id = message.id;
    this.created_at = message.created_at;
    this.chat_id = message.chat_id;
    this.sender_id = message.sender_id;
    this.receiver_id = message.receiver_id;
    this.text = message.text;
};

Message.postMessage = function (chat_id, sender_id, receiver_id, text, result){
    dbConn.query("Insert into `message` (chat_id, sender_id, receiver_id, text, created_at) values (?, ?, ?, ?, ?)", [chat_id, sender_id, receiver_id, text, new Date()], function (err, res) {
        if(err){
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

module.exports = Message;
