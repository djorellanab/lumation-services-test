const { asClass } = require('awilix');

const { Branch_OfficeService, CategoryService, LogService,
    MovementService, PermitionService, ProductService, 
    SupermarketService, TotalService, Type_MovementService,
    UserService }  = require("../services");

module.exports = function(container){
    container.register({
        Branch_OfficeService: asClass(Branch_OfficeService).singleton(),
        CategoryService: asClass(CategoryService).singleton(),
        LogService: asClass(LogService).singleton(),
        MovementService: asClass(MovementService).singleton(),
        PermitionService: asClass(PermitionService).singleton(),
        ProductService: asClass(ProductService).singleton(),
        SupermarketService: asClass(SupermarketService).singleton(),
        TotalService: asClass(TotalService).singleton(),
        Type_MovementService: asClass(Type_MovementService).singleton(),
        UserService: asClass(UserService).singleton(),
    });
}