/**
 * Define theme "b". Rect with 50% corner radius.
 * @function b
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {string} color - Shape color.
 * @returns {string} - SVG string.
 */

var _svg = require('./_svg'),
    numcal = require('numcal');

/** @lends b */
function b(width, height, color) {
    var lineWidth = numcal.min(width, height) * 0.05;

    return _svg(width, height, {
        rect: {
            '@': {
                x: lineWidth / 2,
                y: lineWidth / 2,
                width: width - lineWidth,
                height: height - lineWidth,
                fill:'none',
                'stroke-width': lineWidth,
                stroke: color
            }
        }
    });
}


module.exports = b;