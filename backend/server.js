require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
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

//  connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // listen for requests (want to do this after being connected to database)
    app.listen(process.env.PORT, () => {
        console.log('connected to db & listening on port', process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)
})






// process.env

