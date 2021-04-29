'use strict';
let dbConn = require('./../../config/db.config');
//Chat object create
let Chat = function (chat) {
    this.id = chat.id;
    this.name = chat.name;
};

Chat.getChat = function (user_id, current_user_id, result) {
    dbConn.query("Select distinct * from `chat` join user_chat uc on chat.id = uc.chat_id where uc.user_id = ? or uc.user_id = ? group by id having count(*) > 1", [user_id, current_user_id], function (err, res) {

        if (err) {
            result(null, err);
        } else {
            if (res.length === 0) {
                dbConn.query("Insert into `chat` (`name`) values ('Andrzej')", function (err, res) {
                    if (err) {
                        result(null, err);
                    } else {
                        Chat.getChatByID(result, res.insertId);
                    }
                });
            } else {
                result(null, res);
            }
        }
    });
};

Chat.getChatByID = function (result, id) {
    dbConn.query("Select * from `chat` where id = ?", [id], function (err, res) {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    })
}


module.exports = Chat;
