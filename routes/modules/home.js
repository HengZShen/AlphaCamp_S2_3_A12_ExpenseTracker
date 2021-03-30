const express = require('express')
const router = express.Router()
const Expense = require('../../models/Record')






router.get('/', (req, res) => {
  res.render('index')
})






module.exports = router