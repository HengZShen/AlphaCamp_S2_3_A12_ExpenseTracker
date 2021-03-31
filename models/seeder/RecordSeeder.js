// sample data
const sample = require('../../sample.json').sample

const db = require('../../configs/mongoose')

const Record = require('../Record')


db.once('open', () => {
  console.log('mongodb connected!')

  sample.forEach(({ name, cost, date, category }) => {
    Record.create({ name, cost, date, category })
  })
  console.log('seed data created')
})