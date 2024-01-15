const express = require('express')
const Property = require('../models/propertyModel') /*grabbing the Property Schema info and pulling into thie file */

// creates an instance of the property router
const router = express.Router()


// adding request handlers to the router
// GET all properties
router.get('/', (req, res) => {
    res.json({mssg: "GET all properties"})
})


// GET a single property
router.get('/:id', (req, res) => {
    res.json({mssg: "GET a single property"})
})


// POST a new property
router.post('/', async (req, res) => {
    const {address, price, bedrooms} = req.body /* destruction / extracting */

    try {
        const property = await Property.create({address, price, bedrooms}) /* trying to create a new property */
        res.status(200).json(property)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

// DELETE a single property
router.delete('/:id', (req, res) => {
    res.json({mssg: "DELETE a property"})
})

router.patch('/:id', (req, res) => {
    res.json({mssg: "UPDATE a property"})
})

// export router
module.exports = router