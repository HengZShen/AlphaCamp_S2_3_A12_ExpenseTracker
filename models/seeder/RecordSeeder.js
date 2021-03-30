// sample data
const sample = require('../../sample.json').sample

const db = require('../../configs/mongoose')

const Record = require('../Record')


db.once('open', () => {
  console.log('mongodb connected!')

  sample.forEach(({ name, cost, category, description }) => {
    Record.create({ name, cost, category, description })
  })
  console.log('seed data created')
})