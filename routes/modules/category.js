const express = require('express')
const router = express.Router()
const Expense = require('../../models/Record')
const defaultToggle = require('../../public/javascripts/registerHelper/defaultToggleText')
const defaultText = defaultToggle.defaultText()


router.get('/', (req, res) => {

  const { category } = req.query

  if (category === 'all') {
    req.query = {}
  }

  Expense.find(req.query)
    .lean()
    .then(expenses => res.render('index', { expenses, category }))
    .catch(error => console.log(error))
})





module.exports = router