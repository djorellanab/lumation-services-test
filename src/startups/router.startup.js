const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');

module.exports = function router({HealthcheckMiddleware, swaggerDocument, Branch_OfficeRouter,
    CategoryRouter, MovementRouter, PermitionRouter, ProductRouter, SupermarketRouter,
    Type_MovementRouter, UserRouter,
}) {
    const router = express.Router();
    
    router.use(express.json())
    .use(cors())
    .use(helmet());

    router.use('/api/healthcheck', HealthcheckMiddleware.getStatus.bind(HealthcheckMiddleware));

    router.use('/api/documentation',  swaggerUi.serve);
    router.get('/api/documentation', swaggerUi.setup(swaggerDocument));

    router.use('/api/branch-offices', Branch_OfficeRouter);
    router.use('/api/categories', CategoryRouter);
    router.use('/api/movements', MovementRouter);
    router.use('/api/permitions', PermitionRouter);
    router.use('/api/products', ProductRouter);
    router.use('/api/supermarkets', SupermarketRouter);
    router.use('/api/type-movements', Type_MovementRouter);
    router.use('/api/users', UserRouter);

    return router;
}