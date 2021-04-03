const express = require('express')
const router = express.Router()
const Record = require('../../models/Record')
const checkDefault = require('../../public/javascripts/registerHelper/defaultSelector')
const checkSelect = checkDefault.checkSelect()



// new
router.get('/new', (req, res) => {

  res.render('new')
})

router.post('/', (req, res) => {


  Record.create(req.body)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})


// edit
router.get('/:id', (req, res) => {
  Record.findById(req.params.id)
    .lean()
    .then(expense => res.render('edit', { expense }))
    .catch(error => console.log(error))
})

router.put('/:id', (req, res) => {

  Record.findById(req.params.id)
    .then(expense => {
      Object.assign(expense, req.body)
      expense.save()
    }).then(() => res.redirect('/'))
    .catch(error => console.log(error))

})


//delete 
router.delete("/:id", (req, res) => {
  Record.findById(req.params.id)
    .then(expense => expense.deleteOne())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})


module.exports = router