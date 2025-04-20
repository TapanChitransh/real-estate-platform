const mongoose = require('mongoose');

const propertiesSchema = new mongoose.Schema({
    title:String,
    description: {type:String,required:true},
    pincode:{type:Number,required:true,min:100000,max:999999},
    price:Number,
    address:{type:String,required:true},
    propertyType:{type:String}
},{ timestamps: true });

const Property = mongoose.model('Properties',propertiesSchema);

module.exports = Property;



