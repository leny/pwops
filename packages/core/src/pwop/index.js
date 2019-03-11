/* leny/pwops
 *
 * /src/pwop/index.js - Pwop functions
 *
 * coded by leny
 * started at 11/03/2019
 */

const fromEntries = require("lodash.frompairs");
const {rawProperties, properties} = require("../data");
const camelCase = require("camelcase");

exports.pwop = obj =>
    fromEntries(
        Object.entries(obj).map(([rawProp, rawValue]) => {
            let prop = rawProp,
                value = rawValue;

            if (!properties.includes(rawProp)) {
                if (rawProperties.includes(rawProp)) {
                    prop = camelCase(rawProp);
                }
            }

            if (Array.isArray(rawValue)) {
                if (
                    rawValue.reduce((b, val) => b || Array.isArray(val), false)
                ) {
                    value = rawValue.map(s => s.join(" ")).join(", ");
                } else {
                    value = rawValue.join(" ");
                }
            }

            return [prop, value];
        }),
    );
