// Get all of the libraries and files needed.
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const indexRouter = require('./routes/index.js')

// setup express
const app = express()

//Get path for setting up a static file location for express and then pass that off to express
const staticFileLocation = path.join(__dirname, 'public')
app.use(express.static(staticFileLocation))

//Parsing
app.use(bodyParser.urlencoded({extended: false}))

// tell app where the views are.
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

// Use the given router
app.use('/', indexRouter)

// Run the server on a provided port or 3000 if one isn't given
const server = app.listen(process.env.PORT || 3000, function() {
    console.log(`Server running on port ${server.address().port}`)
})