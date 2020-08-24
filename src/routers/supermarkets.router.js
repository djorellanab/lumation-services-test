const { Router } = require('express');
const { SupermarketValidator } = require("./validators")

module.exports = function ({ SupermarketController, ValidationMiddleware, LogsMiddleware, AccessMiddleware }) {
    const router = Router();

    return router;
};