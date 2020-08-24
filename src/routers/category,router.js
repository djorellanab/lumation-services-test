const { Router } = require('express');
const { CategoryValidator } = require("./validators")

module.exports = function ({ CategoryController, ValidationMiddleware, LogsMiddleware, AccessMiddleware }) {
    const router = Router();

    return router;
};