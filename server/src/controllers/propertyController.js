const propertyServices = require('../services/propertyServices');

exports.getAllProperties = async (req,res)=>{
    try{
        const properties = await propertyServices.getAllProperties();
        res.status(200).json(properties);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};