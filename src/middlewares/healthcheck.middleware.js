class Healthcheck{
    constructor({configs}){
        this.configs = configs;
    }
    async getStatus(_, res, next){
        try {
            return res.status(200).json({
                name: this.configs.site.name,
                uptime: process.uptime()
            });
        } catch (error) {
            return next(error);
        }
    }
}

module.exports = Healthcheck;