const mongoose = require('mongoose')

// * Create your Schema here
const driverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  driverNumber: { type: Number, required: true },
  team: { type: String, required: true },
  points: { type: Number, required: true },
  image: { type: String, required: false },
  flag: { type: String },
  country: { type: String, required: false },
  podiums: { type: Number, required: false },
  pointsToDate: { type: Number, required: false },
  worldChampionships: { type: Number, required: false }
})

// * Register your Schema as a model here

module.exports = mongoose.model('Driver', driverSchema)