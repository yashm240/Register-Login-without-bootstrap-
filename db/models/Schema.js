const { SchemaTypes } = require('mongoose');
const connection = require('../connection')
const Schema = connection.Schema;

const userSchema = new Schema({
    'Name':{type: SchemaTypes.String , required:true},
    'Email':{type: SchemaTypes.String , required:true , unique: true},
    'Pass':{type: SchemaTypes.String , required:true}
})
const newModel = connection.model('login/register24.05',userSchema);

module.exports = {newModel}