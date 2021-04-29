const express = require('express')
const router = express.Router()
const cors = require('cors')

router.use(cors());

const chatController = require('../controllers/chat.controller');

router.get('/open-chat', chatController.getChat);

module.exports = router;