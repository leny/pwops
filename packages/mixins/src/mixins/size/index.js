/* leny/pwops
 *
 * /src/mixins/size/index.js - Size mixin functions
 *
 * coded by leny
 * started at 12/03/2019
 */

const _size = (width, height, prefix = "") => ({
    [`${prefix}${prefix ? "W" : "w"}idth`]: width,
    [`${prefix}${prefix ? "H" : "h"}eight`]: height,
});

exports.size = (width = 0, height = width) => _size(width, height);
exports.minSize = (width = 0, height = width) => _size(width, height, "min");
exports.maxSize = (width = 0, height = width) => _size(width, height, "max");
