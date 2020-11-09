const express = require('express')
const app = express()
const mongoose = require('mongoose')
const logger = require('./lib/logger')
const { dbURI, port } = require('./config/environment')
const router = require('./config/router')

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('Mongo is Connected')
  }
)

app.use(express.static(`${__dirname}/frontend/build`))

app.use(express.json())

app.use(logger)

app.use('/api', router)

app.use('/*', (_, res) => res.sendFile(`${__dirname}/frontend/build/index.html`))

app.listen(port, () => console.log(`Lisening on Port: ${port}`))
