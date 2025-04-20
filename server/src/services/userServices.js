const userProperty = require('../models/userModel');
const bcrypt = require('bcrypt');

exports.getAllUsers = async ()=>{
    const userdata = userProperty.find();
    console.log("all user data is fetched");
    return userdata;
}

exports.setUser = async (req,res)=>{

    //console.log(req.body);

    const data = await userProperty.findOne({UserEmail:req.body.UserEmail})
    //console.log(data);
    if(data){
        return "UserEmail is already present";
    }
    else{
        const salt = await bcrypt.genSalt(10);
        const pass = await bcrypt.hash(req.body.Password,salt);
            const userdata = new userProperty({
                FirstName:req.body.FirstName,
                LastName:req.body.LastName,
                UserEmail:req.body.UserEmail,
                Password:pass}) ;

            //console.log(userdata);
            await userdata.save();
            return "User is Successfully Added";
    }
}