module.exports = {
    async nextValBusiness(db){
        const [seqs] = await db.sequelize.query('SELECT nextval(\'security."business_seq"\');',
        { type: db.Sequelize.QueryTypes.SELECT});
        return Number(seqs.nextval);
    }
}