const express = require('express')
const router = express.Router()
const Expense = require('../../models/Record')
const checkDefault = require('../../public/javascripts/defaultSelector')
const checkSelect = checkDefault.checkSelect()



router.get('/new', (req, res) => {

  res.render('new')
})

router.post('/', (req, res) => {
  const { name, date, category, cost } = req.body
  // console.log(req.body)
  Expense.create({ name, date, category, cost })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})


router.get('/edit/:id', (req, res) => {
  Expense.findById(req.params.id)
    .lean()
    .then(expense => res.render('edit', { expense }))
})

// router.put('/', (req, res) => {

//   console.log(req.body)

//   res.redirect('/')
// })


module.exports = router