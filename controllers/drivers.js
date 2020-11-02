const Driver = require('../models/driver')

// Index GET /drivers
async function driverIndex (req, res) {
  const drivers = await Driver.find()
  res.status(200).json(drivers)
}
// Create POST /drivers
async function driverCreate (req, res) {
  try {
    const newDriver = await Driver.create(req.body)
    res.status(201).json(newDriver)
  } catch (err) {
    res.status(422).json(err)
  }
}
// Show GET /drivers/:id
async function driverShow (req, res) {
  try {
    const driver = await Driver.findById(req.params.id)
    if (!driver) throw new Error()
    res.status(200).json(driver)
  } catch (err) {
    res.status(404).json('Driver Not Found')
  }
}
// Update PUT /drivers/id
async function driverUpdate (req, res) {
  try {
    const driverToEdit = await Driver.findById(req.params.id)
    if (!driverToEdit) throw new Error()
    Object.assign(driverToEdit, req.body)
    await driverToEdit.save()
    res.status(202).json(driverToEdit)
  } catch (err) {
    res.status(422).json(err)
  }
}
// Create DELETE /drivers - Delete a driver
async function driverDelete (req, res) {
  try {
    const driverToDelete = await Driver.findByIdAndDelete(req.params.id)
    console.log(driverToDelete)
    if (!driverToDelete) throw new Error()
    await driverToDelete.remove()
    res.sendStatus(204)
  } catch (err) {
    res.status(404).json('Driver Not Found')
  }
}

module.exports = {
  index: driverIndex,
  show: driverShow,
  create: driverCreate,
  update: driverUpdate,
  delete: driverDelete
}

