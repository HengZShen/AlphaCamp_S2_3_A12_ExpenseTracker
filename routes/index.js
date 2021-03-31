const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const expenses = require('./modules/expenses')
const category = require('./modules/category')


router.use('/expenses', expenses)
router.use('/category', category)
router.use('/', home)



module.exports = router