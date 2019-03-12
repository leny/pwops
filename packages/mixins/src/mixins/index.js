/* leny/pwops
 *
 * /src/mixins/index.js - Mixins functions
 *
 * coded by leny
 * started at 12/03/2019
 */

const position = require("./position");
const size = require("./size");
const flex = require("./flex");

module.exports = {
    ...position,
    ...size,
    ...flex,
};
