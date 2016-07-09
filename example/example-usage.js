'use strict'

const furShapes = require('fur-shapes')
const fs = require('fs')

let themeA = furShapes.a(256, 215, '#38E')
let themeB = furShapes.b(512, 256, '#E00')

fs.writeFileSync('shape-01.svg', themeA)
fs.writeFileSync('shape-02.svg', themeB)
