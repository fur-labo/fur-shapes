#!/usr/bin/env node

/**
 * Render images.
 */

'use strict'

const path = require('path')
const async = require('async')
const fs = require('fs')
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
    const config = filenames.map((filename) => {
      const name = path.basename(filename, '.svg')
      return {
        src: path.resolve(exampleImageDir, name + '.svg'),
        dest: path.resolve(exampleImageDir, name + '.png'),
        size: {width: 512, height: 256}
      }
    })
    await svgpng.byConf(config)
  }
], true)