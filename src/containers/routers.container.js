const { asFunction } = require('awilix');

const {Branch_OfficeRouter, CategoryRouter,
    MovementRouter, PermitionRouter, ProductRouter, 
    SupermarketRouter, Type_MovementRouter, UserRouter} = require('../routers');

module.exports = function routesContainer(container){
    container
    .register({
        Branch_OfficeRouter: asFunction(Branch_OfficeRouter).singleton(),
        CategoryRouter: asFunction(CategoryRouter).singleton(),
        MovementRouter: asFunction(MovementRouter).singleton(),
        PermitionRouter: asFunction(PermitionRouter).singleton(),
        ProductRouter: asFunction(ProductRouter).singleton(),
        SupermarketRouter: asFunction(SupermarketRouter).singleton(),
        Type_MovementRouter: asFunction(Type_MovementRouter).singleton(),
        UserRouter: asFunction(UserRouter).singleton()
    });
};