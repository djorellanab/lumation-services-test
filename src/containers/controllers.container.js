const { asClass } = require('awilix');

const { Branch_OfficeController, CategoryController, MovementController,
    PermitionController, ProductController, SupermarketController, 
    Type_MovementController, UserController}  = require("../controllers");

module.exports = function(container){
    container.register({
        Branch_OfficeController: asClass(Branch_OfficeController).singleton(),
        CategoryController: asClass(CategoryController).singleton(),
        MovementController: asClass(MovementController).singleton(),
        PermitionController: asClass(PermitionController).singleton(),
        ProductController: asClass(ProductController).singleton(),
        SupermarketController: asClass(SupermarketController).singleton(),
        Type_MovementController: asClass(Type_MovementController).singleton(),
        UserController: asClass(UserController).singleton()
    });
}