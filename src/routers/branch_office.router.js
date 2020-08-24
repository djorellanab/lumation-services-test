const { Router } = require('express');
const { Branch_OfficeValidator } = require("./validators")

module.exports = function ({ Branch_OfficeController, ValidationMiddleware, LogsMiddleware, AccessMiddleware }) {
    const router = Router();

    return router;
};