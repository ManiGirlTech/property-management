const mongoose = require('mongoose') /* needed to create schema bc mongodb alone is schemaless */

// fxn to create a new schema 
const Schema = mongoose.Schema

const propertySchema = new Schema({
    address: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    bedrooms: {
        type: Number,
        required: true
    }
}, { timestamps: true }) /* timestamps: will automatically create property for us to let me know when it was created and last updated */


// creates us a model we can import
module.exports = mongoose.model('Property', propertySchema) 


// will find all of the property models in schema
// Property.find() 