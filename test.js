// --------------------------------------------------------------------------------------------------------------------

"use strict"

// npm
const test = require('tape')

// local
const namez = require('./')

// --------------------------------------------------------------------------------------------------------------------

test('defaults', (t) => {
  t.plan(1)

  const name = namez()
  t.equal(name.split('-').length, 3, 'Length is three, using the - separator')

  t.end()
})

test('separator', (t) => {
  t.plan(1)

  const name = namez({ separator : ' ' })
  t.equal(name.split(' ').length, 3, 'Length is three, using a space separator')

  t.end()
})

test('upper', (t) => {
  t.plan(1)

  const name = namez({ format : 'upper' })
  t.equal(name.match(/a-z/), null, 'No lowercase letters when asking for upper')

  t.end()
})

test('upper', (t) => {
  t.plan(1)

  const name = namez({ format : 'lower' })
  t.equal(name.match(/A-Z/), null, 'No uppcase letters when asking for lower')

  t.end()
})

// --------------------------------------------------------------------------------------------------------------------

