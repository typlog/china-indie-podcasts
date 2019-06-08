const fs = require('fs')

const data = fs.readFileSync('./data/index.txt', 'utf8')
const podcasts = data.trim().split('\n').map(name => {
  return require('./data/' + name + '.json')
})


module.exports = podcasts
