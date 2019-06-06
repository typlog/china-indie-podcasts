const marked = require('marked')

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
    podcasts: require('./podcasts.json')
  },
}
