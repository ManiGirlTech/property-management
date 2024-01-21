const express = require('express')

const { createProperty, getAllProperties, getAProperty, deleteProperty, updateProperty } = require('../controllers/propertyController')

// creates an instance of the property router
const router = express.Router()


// adding request handlers to the router
// GET all properties
router.get('/', getAllProperties)


// GET a single property
router.get('/:id', getAProperty)


// POST a new property
router.post('/', createProperty)

// DELETE a single property
router.delete('/:id', deleteProperty)

// UPDATE a single property
router.patch('/:id', updateProperty)

// export router
module.exports = router


