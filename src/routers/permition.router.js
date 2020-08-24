const { Router } = require('express');
const { PermitionValidator } = require("./validators")

module.exports = function ({ PermitionController, ValidationMiddleware, LogsMiddleware, AccessMiddleware }) {
    const router = Router();

    return router;
};