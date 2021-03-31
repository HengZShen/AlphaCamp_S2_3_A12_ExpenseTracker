const express = require('express')
const router = express.Router()
const Expense = require('../../models/Record')
const checkDefault = require('../../public/javascripts/defaultSelector')
const checkSelect = checkDefault.checkSelect()


// new
router.get('/new', (req, res) => {

  res.render('new')
})

router.post('/', (req, res) => {


  Expense.create(req.body)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})


// edit
router.get('/:id', (req, res) => {
  Expense.findById(req.params.id)
    .lean()
    .then(expense => res.render('edit', { expense }))
})

router.put('/:id', (req, res) => {

  Expense.findById(req.params.id)
    .then(expense => {
      Object.assign(expense, req.body)
      expense.save()
    }).then(() => res.redirect('/'))
    .catch(error => console.log(error))

})


module.exports = router