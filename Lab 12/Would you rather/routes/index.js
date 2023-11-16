// Get all of the libraries and files needed.
const express = require('express')
const router = express.Router()
const randomWYRQuestion = require("../model/wyr_questions")

// Default path for our server which shows a placeholder.
router.get("/", function(req, res, next){
    res.send("Placeholder")
})

// Main endpoint for our API, sends raw JSON which is a random would you rather question.
router.get("/wyr", function(req, res, next) {
    res.json(randomWYRQuestion())
})

module.exports = router