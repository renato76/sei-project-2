const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')
const User = require('../models/user')

async function secureRoute(req, res, next)  {
  try {
    console.log(req.headers)
    if (!req.headers.authorization) throw new Error() 

    
    // this bit takes their token, strips off the Bearer and space and replaces it with this token
    const token = req.headers.authorization.replace('Bearer ', '')
    
  
    // this is where the token is then decoded
    const payload = jwt.verify(token, secret)
    console.log('Token >>>>', token)
    console.log(secret)

    console.log('Payload >>>>', payload)

    // grab the user ID from payload, which is a key called sub (see auth.js)
    const user = await User.findById(payload.sub)

    console.log('user >>>>', user)

    // if user does not exist, throw an error, which throws them out basically
    if (!user) throw new Error()

    // if got this far, then they pay proceed! 
    // so we can now let them onto the controllers, they can now update and delete a driver
    next()



  } catch (err) {
    console.log(err)
    res.status(403).json({ message: 'forbidden ' })
  }
}

module.exports = secureRoute