/**
 * Define theme "c". Rect with border.
 * @memberof module:fur-shapes/lib
 * @function c
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {string} color - Shape color.
 * @returns {string} - SVG string.
 */

var _svg = require('./_svg'),
    numcal = require('numcal');

/** @lends c */
function c(width, height, color) {

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

module.exports = c;