const express = require('express')

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
router.post('/', (req, res) => {
    res.json({mssg: "POST a new property"})
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