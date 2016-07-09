/**
 * Define theme "c". Rect with border.
 * @function c
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {string} color1 - Shape color 1.
 * @param {string} color2 - Shape color 2.
 * @returns {string} - SVG string.
 */
'use strict'

const _svg = require('./_svg')
const numcal = require('numcal')

/** @lends c */
function c (width, height, color1, color2) {
  let lineWidth = numcal.min(width, height) * 0.05

  return _svg(width, height, {
    rect: [
      {
        '@': {
          x: 0,
          y: 0,
          width: width,
          height: height,
          fill: color2
        }
      }, {
        '@': {
          x: lineWidth / 2,
          y: lineWidth / 2,
          width: width - lineWidth,
          height: height - lineWidth,
          fill: 'none',
          'stroke-width': lineWidth,
          stroke: color1
        }
      }
    ]
  })
}

c.$reversed = true

module.exports = c
