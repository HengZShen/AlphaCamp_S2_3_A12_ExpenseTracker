const express = require('express')
const router = express.Router()
const Record = require('../../models/Record')
const checkFont = require('../../public/javascripts/registerHelper/fontawesome')
const checkIcon = checkFont.checkIcon()
const defaultToggle = require('../../public/javascripts/registerHelper/defaultToggleText')
const defaultText = defaultToggle.defaultText()





router.get('/', (req, res) => {

  Record.find()
    .lean()
    .then(expenses => res.render('index', { expenses }))
    .catch(error => console.log(error))

})






module.exports = router