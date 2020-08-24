module.exports = {
    cleanSensitiveData(entity){
        if(entity.password)
            delete entity.password;
    }
}