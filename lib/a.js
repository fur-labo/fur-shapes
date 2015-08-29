/**
 * Define theme "a". Simple rect.
 * @function a
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {string} color - Shape color.
 * @returns {string} - SVG string.
 */

var _svg = require('./_svg');

/** @lends a */
function a(width, height, color) {

    return _svg(width, height, {
        rect: {
            '@': {
                x: 0,
                y: 0,
                width: width,
                height: height,
                fill: color
            }
        }
    });
}

module.exports = a;