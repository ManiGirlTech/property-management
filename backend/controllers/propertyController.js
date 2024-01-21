const Property = require('../models/propertyModel') /*grabbing the Property Schema info and pulling into thie file */
const mongoose = require('mongoose');

// get all properties
const getAllProperties = async (req, res) => {
    const properties = await Property.find({}).sort({createdAt: -1}) /* will find all properties and sort them in descending order (with new properties at the top) */

    res.status(200).json(properties)
}

// get a single property
const getAProperty = async (req, res) => {
    const { id } = req.params /* grabbing the id using destructuring - all route parameters are stored on params property and will get us the id of property */

    // if not a valid mongoose id, then return error message
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Not a valid property'})
    }

    const property = await Property.findById(id)

    if (!property) {
        return res.status(404).json({error: 'Property not found'}) /* if property doc not found/ doesn't exist it will come back null and give this error */
    }

    res.status(200).json(property) /*if found, property will return the correct info */
}

// create a new property
const createProperty = async (req, res) => {
     const {address, price, bedrooms} = req.body /* destruction / extracting */

    // add property doc to db
    try {
        const property = await Property.create({address, price, bedrooms}) /* trying to create a new property */
        res.status(200).json(property)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a property
const deleteProperty = async (req, res) => {
    const { id } = req.params

    // if not a valid mongoose id, then return error message
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Not a valid property'})
    }

    const property = await Property.findOneAndDelete({_id: id}) /*find _id in mongodb and if equal to id in code, delet */

    // if not a valid property, then return error
    if (!property) {
        return res.error(400).json({error: 'Property not found' })
    }

    // if valid property then delete property
    res.status(200).json(property)
}


// update a property




module.exports = {
    createProperty,
    getAllProperties,
    getAProperty,
    deleteProperty
}