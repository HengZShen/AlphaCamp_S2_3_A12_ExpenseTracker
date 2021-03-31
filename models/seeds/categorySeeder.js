const sample = require('../../category.json').sample

const db = require('../../configs/mongoose')

const Record = require('../Record')



db.once('open', () => {
  console.log('mongodb connected!')

  Record.create(sample)
    .then(() => {
      console.log('category seed data created')
      return db.close()
    })
    .then(() => console.log('mongoDB connection closed'))
    .catch(error => console.log(error))
})