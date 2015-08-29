/**
 * Define theme "g".
 * @memberof module:fur-shapes/lib
 * @memberof module:fur-shapes/lib
 * @function g
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {string} color - Shape color.
 * @returns {string} - SVG string.
 */

var _svg = require('./_svg'),
    numcal = require('numcal');

/** @lends g */
function g(width, height, color) {
    var r = numcal.min(height, width);

    return _svg(width, height, {
        rect: {
            '@': {
                x: 0,
                y: 0,
                rx: r,
                ry: r,
                width: width,
                height: height,
                fill: color
            }
        }
    });
}

module.exports = g;