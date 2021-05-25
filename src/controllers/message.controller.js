'use strict';
const Message = require('../models/message.model');
exports.postMessage = function (req, res) {
    Message.postMessage(req.body.chat_id, req.body.sender_id, req.body.receiver_id, req.body.text,  function(err, chat) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', chat);
        res.send(chat);
    });
}