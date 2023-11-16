// Get all of the libraries and files needed.
const express = require('express')
const router = express.Router()

// Shows the BMI form whenever you connect to the server.
router.get('/', function(req, res, next) {
    res.render('bmi_form')
})

// Retrieve the height/weight from the form, calculate BMI, and send it to the next view to be displayed as the user's BMI.
router.post('/bmi_input', function(req, res, next){
    const formData = req.body

    //calculate BMI from parsed data
    let bmi = formData.weight / (formData.height * formData.height)
    //console.log(req.body)

    // Send the BMI back to the user.
    res.render('bmi_output',{
        bmi: bmi,
    })
})

module.exports = router