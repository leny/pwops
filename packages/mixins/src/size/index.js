/* leny/pwops/mixins
 *
 * /src/size/index.js - Size mixin functions
 *
 * coded by leny
 * started at 12/03/2019
 */

const {registerMixin} = require("@pwops/core");

const _size = (width, height, prefix = "") => ({
    [`${prefix}${prefix ? "W" : "w"}idth`]: width,
    [`${prefix}${prefix ? "H" : "h"}eight`]: height,
});

registerMixin("size", (width = 0, height = width) => _size(width, height));

registerMixin("minSize", (width = 0, height = width) =>
    _size(width, height, "min"),
);

registerMixin("maxSize", (width = 0, height = width) =>
    _size(width, height, "max"),
);
