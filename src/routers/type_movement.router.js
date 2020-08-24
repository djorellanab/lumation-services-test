const { Router } = require('express');
const { Type_MovementValidator } = require("./validators")

module.exports = function ({ Type_MovementController, ValidationMiddleware, LogsMiddleware, AccessMiddleware }) {
    const router = Router();

    return router;
};