// Get all of the libraries and files needed.
const express = require('express')
const indexRouter = require('./routes/index.js')
const app = express()

// use router
app.use('/', indexRouter)

// Run the server on port 3000 if none is given.
const server = app.listen(process.env.PORT || 3000, function()
{
    console.log(`Server running on port ${server.address().port}`)
})