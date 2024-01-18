const Property = require('../models/propertyModel') /*grabbing the Property Schema info and pulling into thie file */

// get all properties
const getAllProperties = async (req, res) => {
    const properties = await Property.find({}).sort({createdAt: -1}) /* will find all properties and sort them in descending order (with new properties at the top) */

    res.status(200).json(properties)
}

// get a single property
const getProperty = async (req, res) => {
    const {id} = req.params /* grabbing the id using destructuring - all route parameters are stored on params property and will get us the id of property */

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


// update a property




module.exports = {
    createProperty,
    getAllProperties,
    getProperty
}