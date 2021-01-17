'use strict'

const md = require('markdown-it')

module.exports = function (content) {
  const markdown = md()
  const html= markdown.render(content)
  return html
}