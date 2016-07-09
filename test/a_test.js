/**
 * Test case for a.
 * Runs with mocha.
 */
'use strict'

const a = require('../lib/a.js')
const mkdirp = require('mkdirp')
const fs = require('fs')
const assert = require('assert')

const tmpDir = __dirname + '/../tmp'

describe('a', function () {
  before((done) => {
    mkdirp.sync(tmpDir)
    done()
  })

  after((done) => {
    done()
  })

  it('A', (done) => {
    let svg = a(512, 256, '#38E')
    fs.writeFile(tmpDir + '/testing-a.svg', svg, (err) => {
      assert.ifError(err)
      done()
    })
  })
})

/* global describe, before, after, it */
