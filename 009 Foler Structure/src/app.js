const express = require('express');
const UserRouter = require('./routers/users/user');

const allRoutes = express.Router();

allRoutes.use('/user', UserRouter);


module.exports = allRoutes;