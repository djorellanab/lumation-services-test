const { asClass } = require('awilix');

const { Branch_OfficeRepository, CategoryRepository, LogRepository,
    MovementRepository, PermitionRepository, ProductRepository,
    SupermarketRepository, TotalRepository, Type_MovementRepository, 
    UserRepository}  = require("../repositories");

module.exports = function(container){
    container.register({
        Branch_OfficeRepository: asClass(Branch_OfficeRepository).singleton(),
        CategoryRepository: asClass(CategoryRepository).singleton(),
        LogRepository: asClass(LogRepository).singleton(),
        MovementRepository: asClass(MovementRepository).singleton(),
        PermitionRepository: asClass(PermitionRepository).singleton(),
        ProductRepository: asClass(ProductRepository).singleton(),
        SupermarketRepository: asClass(SupermarketRepository).singleton(),
        TotalRepository: asClass(TotalRepository).singleton(),
        Type_MovementRepository: asClass(Type_MovementRepository).singleton(),
        UserRepository: asClass(UserRepository).singleton(),
    });
}