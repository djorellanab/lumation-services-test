const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');

module.exports = function router({HealthcheckMiddleware, swaggerDocument}) {
    const router = express.Router();
    
    router.use(express.json())
    .use(cors())
    .use(helmet());

    router.use('/api/healthcheck', HealthcheckMiddleware.getStatus.bind(HealthcheckMiddleware));

    router.use('/api/documentation',  swaggerUi.serve);
    router.get('/api/documentation', swaggerUi.setup(swaggerDocument));

    return router;
}