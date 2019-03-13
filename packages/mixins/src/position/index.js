/* leny/pwops/mixins
 *
 * /src/position/index.js - Position mixin functions
 *
 * coded by leny
 * started at 12/03/2019
 */

const {registerMixin} = require("@pwops/core");
const fromEntries = require("lodash.frompairs");

const position = type => (...values) => {
    let entries = {};

    switch (values.length) {
        case 0:
            return {position: type};
        case 1:
            entries = {
                position: type,
                top: values[0],
                right: values[0],
                bottom: values[0],
                left: values[0],
            };
            break;
        case 2:
            entries = {
                position: type,
                top: values[0],
                right: values[1],
                bottom: values[0],
                left: values[1],
            };
            break;
        case 3:
            entries = {
                position: type,
                top: values[0],
                right: values[1],
                bottom: values[2],
                left: values[1],
            };
            break;
        case 4:
            entries = {
                position: type,
                top: values[0],
                right: values[1],
                bottom: values[2],
                left: values[3],
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

registerMixin("static", position("static"));
registerMixin("relative", position("relative"));
registerMixin("absolute", position("absolute"));
registerMixin("sticky", position("sticky"));
registerMixin("fixed", position("fixed"));
