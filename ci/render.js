#!/usr/bin/env node

/**
 * Render images.
 */

'use strict'

const path = require('path')
const asleep = require('asleep')
const apeTasking = require('ape-tasking')
const expandglob = require('expandglob')
const writexml = require('writexml')
const svgpng = require('svgpng')
const furShapes = require('../lib')

const basedir = path.resolve(__dirname, '..')
process.chdir(basedir)

const exampleImageDir = path.resolve(basedir, 'example/images')

apeTasking.runTasks([
  async function renderSvg () {
    const themes = require('../lib/.themes.json')
    for (const theme of themes) {
      const svg = furShapes[theme](512, 256, '#38E', '#FFF')
      const filename = path.resolve(exampleImageDir, 'example-shape-' + theme + '.svg')
      await writexml(filename, 'svg', svg)
    }
  },
  async function renderPng () {
    const filenames = await expandglob('*.svg', {cwd: exampleImageDir})
    for (const filename of filenames) {
      const name = path.basename(filename, '.svg')
      const src = path.resolve(exampleImageDir, name + '.svg')
      const dest = path.resolve(exampleImageDir, name + '.png')
      await svgpng(src, dest, {
        size: {width: 512, height: 256}
      })
    }
  }
], false)