const router = require('express').Router()
const drivers = require('../controllers/drivers')
const auth = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')

router.route('/drivers')
  .get(drivers.index)
  .post(secureRoute, drivers.create)

router.route('/drivers/:id')
  .get(drivers.show)
  .put(secureRoute, drivers.update)
  .delete(secureRoute, drivers.delete)

router.route('/register')
  .post(auth.register)

router.route('/login')
  .post(auth.login)

module.exports = router