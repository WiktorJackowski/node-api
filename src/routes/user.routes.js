const express = require('express')
const router = express.Router()
const cors = require('cors')

router.use(cors());

const userController = require('../controllers/user.controller');

router.get('/', userController.findAll);

router.post('/register', userController.register);

router.post('/login', userController.login);

module.exports = router;
