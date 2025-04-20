const userServices = require('../services/userServices');

exports.getAllUsers = async (req,res) =>{
    try{
        const user = await userServices.getAllUsers();
        res.status(200).json(user);
    }
    catch(error) {
        res.status(500).json({message:error.message});
    }
}

exports.setUser = async (req,res) =>{
    try{
        //console.log(req.body);
        const user = await userServices.setUser(req);
        res.status(200).json(user);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}