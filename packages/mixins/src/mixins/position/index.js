/* leny/pwops
 *
 * /src/mixins/position/index.js - Position mixin functions
 *
 * coded by leny
 * started at 12/03/2019
 */

const fromEntries = require("lodash.frompairs");

const position = type => value => {
    if (!Array.isArray(value)) {
        if (value == null || value === "") {
            return {
                position: type,
            };
        }

        return {
            position: type,
            top: value,
            right: value,
            bottom: value,
            left: value,
        };
    }

    let entries = {};

    switch (value.length) {
        case 0:
            return {position: type};
        case 1:
            entries = {
                position: type,
                top: value[0],
                right: value[0],
                bottom: value[0],
                left: value[0],
            };
            break;
        case 2:
            entries = {
                position: type,
                top: value[0],
                right: value[1],
                bottom: value[0],
                left: value[1],
            };
            break;
        case 3:
            entries = {
                position: type,
                top: value[0],
                right: value[1],
                bottom: value[2],
                left: value[1],
            };
            break;
        case 4:
            entries = {
                position: type,
                top: value[0],
                right: value[1],
                bottom: value[2],
                left: value[3],
            };
            break;
        default:
            throw new TypeError(`Invalid argument amount for ${type}`);
    }

    return fromEntries(
        Object.entries(entries).filter(
            ([, val]) => val != null && val !== false,
        ),
    );
};

exports.static = position("static");
exports.relative = position("relative");
exports.absolute = position("absolute");
exports.sticky = position("sticky");
exports.fixed = position("fixed");
