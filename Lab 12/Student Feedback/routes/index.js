// Get all of the libraries and files needed.
const express = require('express')
const router = express.Router()

// default path if you just connect to this webpage, shows index.hbs which allows you to navigate to the form.
router.get('/', function(req, res, next) {
    res.render('index', {
        title: "feedback application",
        author: "Josh Mathews",
        timePageLoadedAt: new Date(),
    })
})

// the main feedback form we give to the user.
router.get('/feedback-form', function(req, res, next){
    res.render('student_feedback_form')
})

// Retrieve the data from the user and then send it back to them as a way of confirming data they've sent.
router.post('/submit-feedback', function(req, res, next){
    const formData = req.body
    console.log(req.query)

    // database here!

    res.render('thank_you',{
        name: formData.name,
        email: formData.email,
        comments: formData.comments,
        currentStudent: formData["current-student"]
    })
})


module.exports = router