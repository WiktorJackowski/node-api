const express = require('express')
const router = express.Router()
const cors = require('cors')

router.use(cors());

const modelController = require('../controllers/message.controller');

router.post('/post-message', modelController.postMessage);

module.exports = router;