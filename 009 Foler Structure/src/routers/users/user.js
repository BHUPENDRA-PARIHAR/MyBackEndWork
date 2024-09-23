const express = require('express');
const { readuser } = require('../../controllers/controllers');

const UserRouter = express.Router();

UserRouter.get('/read-user',readuser);
UserRouter.post('/register-user',)


module.exports = UserRouter;