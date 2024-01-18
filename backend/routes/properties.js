const express = require('express')

const { createProperty, getAllProperties, getAProperty } = require('../controllers/propertyController')

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
router.delete('/:id', (req, res) => {
    res.json({mssg: "DELETE a property"})
})

router.patch('/:id', (req, res) => {
    res.json({mssg: "UPDATE a property"})
})

// export rout  er
module.exports = router