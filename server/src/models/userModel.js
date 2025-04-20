const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    FirstName:{type:String, required:true},
    LastName:{type:String, required:true},
    UserEmail:{type:String, required:true,unique:true},
    Password:{type:String,required:true}
},{timestamp:true});

UserModel = mongoose.model('User',userSchema);

module.exports = UserModel;