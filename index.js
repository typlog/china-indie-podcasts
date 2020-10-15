const fs = require('fs')

const podcasts = fs.readdirSync('./data').filter(name => {
  return /\.json$/.test(name)
}).map(name => {
  return require('./data/' + name)
})

module.exports = podcasts
