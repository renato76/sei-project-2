const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Drivers = require('../models/driver')
const driverData = require('./data/drivers')

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  async (err) => {
    if (err) {
      console.log(err)
      return
    }
    try {
      await mongoose.connection.db.dropDatabase() // delete everything that is currently in there

      console.log('Database Dropped 🤙')

      const drivers = await Drivers.create(driverData)
      console.log(`${drivers.length} drivers created 🏎`)

    } catch (err) {
      console.log(err)
    }
    console.log('Goodbye 👋')

    await mongoose.connection.close()
  } 
)