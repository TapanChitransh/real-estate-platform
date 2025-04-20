const Property = require('../models/propertiesModel');

exports.getAllProperties =async () =>{
    const data = await Property.find();
    console.log("property api is hit at service level");
    
    return data;
}