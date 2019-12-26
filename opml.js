const fs = require('fs')
const podcasts = require('./')

let xml = '<?xml version="1.0" encoding="UTF-8"?>'
xml += '\n<opml version="2.0"><head><title>中文独立播客</title></head>'
xml += '<body>'

podcasts.forEach(item => {
  const outline = `<outline title="${item.name}" xmlUrl="${item.feed}" htmlUrl="${item.url}" />`
  xml += outline
})

xml += '</body></opml>\n'

fs.writeFileSync('dist/opml.xml', xml)
