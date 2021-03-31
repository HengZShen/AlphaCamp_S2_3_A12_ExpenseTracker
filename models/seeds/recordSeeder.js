// sample data
const sample = require('../../record.json').sample

const db = require('../../configs/mongoose')

const Record = require('../Record')


db.once('open', () => {
  console.log('mongodb connected!')

  // sample.forEach(({ name, date, category, amount }) => {
  //   Record.create({ name, date, category, amount })
  // })
  Record.create(sample)
    .then(() => {
      console.log('record seed data created')
      return db.close()
    })
    .then(() => console.log('mongoDB connection closed'))
    .catch(error => console.log(error))

})