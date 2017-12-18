const animals      = require('./words/animals.js')
const colours      = require('./words/colours.js')
const adjectives   = require('./words/adjectives.js')

const animalLen    = animals.length
const colourLen    = colours.length
const adjectiveLen = adjectives.length

const defaults = {
  separator : '-',
  format    : 'lower',
}

function name(opts) {
  opts = opts || defaults
  opts = {
    separator : opts.separator || defaults.separator,
    format    : opts.format    || defaults.format,
  }

  let parts = []
  parts.push(adjectives[Math.floor(Math.random() * adjectiveLen)])
  parts.push(colours[Math.floor(Math.random() * colourLen)])
  parts.push(animals[Math.floor(Math.random() * animalLen)])

  let fn = function(){}
  if ( opts.format === 'lower' ) {
    fn = function(s) {
      return s.toLowerCase()
    }
  }
  if ( opts.format === 'upper' ) {
    fn = function(s) {
      return s.toUpperCase()
    }
  }
  if ( opts.format === 'title' ) {
    fn = function(s) {
      return s[0].toUpperCase() + s.slice(1).toLowerCase()
    }
  }

  parts = parts.map(fn)
  return parts.join(opts.separator)
}

module.exports = name
