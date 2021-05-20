'use strict';
let dbConn = require('./../../config/db.config');
//Chat object create
let Chat = function (chat) {
    this.id = chat.id;
    this.name = chat.name;
};

Chat.getChat = function (user_id, current_user_id, chat_name, result) {
    dbConn.query("Select distinct * from `chat` join user_chat uc on chat.id = uc.chat_id where uc.user_id = ? or uc.user_id = ? group by id having count(*) > 1", [user_id, current_user_id], function (err, res) {

        if (err) {
            result(null, err);
        } else {
            if (res.length === 0) {
                dbConn.query("Insert into `chat` (`name`) values (?)", [chat_name], function (err, res) {
                    if (err) {
                        result(null, err);
                    } else {

                        //TODO: nowe metoda x2

                        Chat.putIntoChat(user_id, res.insertId, result);
                        Chat.putIntoChat(current_user_id, res.insertId, result);


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

//TODO: insert do tabeli user chat - parametr user_id i chat_id

Chat.putIntoChat = function (user_id, chat_id, result){
    dbConn.query("Insert into user_chat (user_id, chat_id) values (?, ?)", [user_id, chat_id], function (err){
        if(err){
            result(null, err);
        }
    });
}


module.exports = Chat;
