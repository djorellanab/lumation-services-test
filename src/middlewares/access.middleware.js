class AccessMiddleware{
    constructor({SupermarketService, Branch_OfficeService}){
        this.SupermarketService = SupermarketService;
        this.Branch_OfficeService = Branch_OfficeService;
    }
    checkAccessByObject(isBody, indexObject, isSupermarket){
        return function(req, res, next){
            try {
                let objectIds = null;
                let obj = (!isBody) ?  req.params.idObject : null;
                obj = (!obj) ? req.body[indexObject] : obj;

                if(req.userJwt.isAdmin)
                    return next();
                else if(req.userJwt.roleId == "16fb6a89-f773-4f47-a2e0-4feed35eaac9"){
                    objectIds = this.SupermarketService.getByBusinessIds(req.userJwt.permitions, isSupermarket);
                }else{
                    objectIds = this.Branch_OfficeService.getByBusinessIds(req.userJwt.permitions, "branch_officeId");
                }
                if(objectIds.includes(obj)){
                    return next();
                }else{
                    return res.status(401).json({message: 'unauthorized'});
                }
            } catch (error) {
                console.log(error.message);
                return res.status(500).json(error.message);
            }
        };
    }
    checkAccessByShortcut(shortcut){
        return function(req, res, next){
            try {
                if(req.userJwt.isAdmin){
                    return next();
                }
                else if(req.userJwt.shortcuts.includes(shortcut)){
                    return next();
                }else{
                    return res.status(401).json({message: 'unauthorized'});
                }
            } catch (error) {
                return res.status(401).json({message: 'unauthorized'});
            }
        };
    }
}

module.exports = AccessMiddleware;