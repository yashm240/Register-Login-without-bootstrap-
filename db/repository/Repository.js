const {newModel} = require('../models/Schema');
module.exports = {
    async Register(userobject){
        const newdata = new newModel({
            Name: userobject.Name,
            Email: userobject.Email,
            Pass: userobject.Pass
        });
        const doc = await newdata.save()
        return doc;
    },
    async Login(userobject){
        console.log("in login ",userobject);
        const doc = await newModel.findOne({'Email':userobject.Email,'Pass':userobject.Pass}).exec()
        return doc;
    }
}