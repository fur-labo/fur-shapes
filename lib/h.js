/**
 * Define theme "h".
 * @memberof module:fur-shapes/lib
 * @memberof module:fur-shapes/lib
 * @function h
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {string} color - Shape color.
 * @returns {string} - SVG string.
 */

var _svg = require('./_svg'),
    numcal = require('numcal');

/** @lends h */
function h(width, height, color) {
    var r = numcal.min(height, width),
        lineWidth = numcal.min(width, height) * 0.05;

    return _svg(width, height, {
        rect: [
            {
                '@': {
                    x: lineWidth / 2,
                    y: lineWidth / 2,
                    rx: r,
                    ry: r,
                    width: width - lineWidth,
                    height: height - lineWidth,
                    fill: 'none',
                    'stroke-width': lineWidth,
                    stroke: color
                }
            },
            {
                '@': {
                    x: lineWidth * 2,
                    y: lineWidth * 2,
                    rx: r,
                    ry: r,
                    width: width - lineWidth * 4,
                    height: height - lineWidth * 4,
                    fill: color
                }
            }
        ]
    });
}

module.exports = h;