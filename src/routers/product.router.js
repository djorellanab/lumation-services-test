const { Router } = require('express');
const { ProductValidator } = require("./validators")

module.exports = function ({ ProductController, ValidationMiddleware, LogsMiddleware, AccessMiddleware }) {
    const router = Router();

    return router;
};