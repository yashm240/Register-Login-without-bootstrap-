const repository = require('../../db/repository/Repository')
const schema = require('../../db/models/Schema')
module.exports = {
    async Login(request,response){
        let userobject = request.body;
        console.log("request body is ",request.body)
        const result = await repository.Login(userobject);
        console.log("this is result ",result);
        response.json({message:"Login Successful", name:result.Name})
    },
    async Register(request,response){
        console.log("in register")
        let userObject = request.body;
        console.log("request body is ", request.body);
        const result = await repository.Register(userObject)
        response.json({message:"Registration done"})
    }
}