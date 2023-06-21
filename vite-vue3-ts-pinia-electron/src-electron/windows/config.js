const path = require('path')

const ACHEME = 'file'

const LOAD_URL = `file://${path.join(__dirname, '../../dist/index.html')}`

module.exports = {
  ACHEME,
  LOAD_URL,
}
