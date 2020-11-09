const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/formula-one-drivers'
const port = process.env.PORT || 5001
const secret = 'shh it\'s a secret'

module.exports = {
  dbURI,
  port,
  secret
}