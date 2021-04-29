'use strict';
const Chat = require('../models/chat.model');
exports.getChat = function (req, res) {
    Chat.getChat(req.body.user_id, req.body.current_user_id,  function(err, chat) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', chat);
        res.send(chat);
    });
}