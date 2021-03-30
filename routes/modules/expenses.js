const express = require('express')
const router = express.Router()
const Expense = require('../../models/Record')






router.get('/new', (req, res) => {

  res.render('new')
})

router.post('/', (req, res) => {

  console.log(req.body)

  res.redirect('/')
})






module.exports = router