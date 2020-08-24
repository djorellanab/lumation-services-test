const { Router } = require('express');
const { MovementValidator } = require("./validators")

module.exports = function ({ MovementController, ValidationMiddleware, LogsMiddleware, AccessMiddleware }) {
    const router = Router();

    return router;
};