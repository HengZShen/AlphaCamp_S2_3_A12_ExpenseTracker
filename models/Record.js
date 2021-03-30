const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema({

  name: { type: String, required: true },
  cost: { type: Number, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true }

})



module.exports = mongoose.model('Record', recordSchema)