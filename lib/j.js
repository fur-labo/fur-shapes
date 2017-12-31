/**
 * Define theme "j".
 * @function j
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {string} color1 - Shape color 1.
 * @param {string} color2 - Shape color 2.
 * @returns {string} - SVG string.
 */

const _svg = require('./_svg')

/** @lends j */
function j (width, height, color1, color2) {
  return _svg(width, height, {
    rect: [

    ]
  })
}

j.$reversed = false

module.exports = j
