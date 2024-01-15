require('dotenv').config()

const express = require('express')

const propertyRoutes = require('./routes/properties')

// express app
const app = express()

// middleware
app.use(express.json()) /*this looks to see if any data is coming to the server and if so it passes it so we can access through requests handler */
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


/* ROUTES */
// property route to connect to properties.js
app.use('/api/properties', propertyRoutes)



// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})


// process.env

