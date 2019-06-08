const fs = require('fs')
const marked = require('marked')

const data = fs.readFileSync('./data/index.txt', 'utf8')
const podcasts = data.trim().split('\n').map(name => {
  return require('./data/' + name + '.json')
})

module.exports = {
  root: ['./html/', './templates/'],
  options: {
    autoescape: false,
    trimBlocks: true,
    lstripBlocks: true,
  },
  filters: {
    markdown: marked,
  },
  data: {
    env: process.env.NODE_ENV,
    podcasts: podcasts,
  },
}
