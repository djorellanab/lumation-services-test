const { Router } = require('express');
const { UserValidator } = require("./validators")

module.exports = function ({ UserController, ValidationMiddleware, LogsMiddleware, AccessMiddleware }) {
    const router = Router();

    router.post('/', UserValidator.postValidator,
    ValidationMiddleware.checkValidations.bind(ValidationMiddleware),
    UserController.create.bind(UserController),
    LogsMiddleware.enterLog({shortcutId:'c1673bfb-4688-45e3-830f-e584ecf6a2e5'}, {message:"okay"}).bind(LogsMiddleware));

    router.post('/login', UserValidator.loginValidator,
    ValidationMiddleware.checkValidations.bind(ValidationMiddleware),
    UserController.login.bind(UserController));
    return router;
};