/* leny/pwops
 *
 * /src/pwop/index.js - Pwop functions
 *
 * coded by leny
 * started at 11/03/2019
 */

const fromEntries = require("lodash.frompairs");
const {properties} = require("../data");
const mixins = require("../mixins");

const pwop = obj => {
    const entries = [];

    Object.entries(obj).forEach(entry => {
        let [prop, value] = entry;

        if (mixins[prop]) {
            entries.push(...Object.entries(mixins[prop](value)));
            return;
        }

        if (!Object.values(properties).includes(prop)) {
            if (Object.keys(properties).includes(prop)) {
                prop = properties[prop];
            }
        }

        if (Array.isArray(value)) {
            if (value.reduce((b, val) => b || Array.isArray(val), false)) {
                value = value.map(s => s.join(" ")).join(", ");
            } else {
                value = value.join(" ");
            }
        }

        entries.push([prop, value]);
    });

    return fromEntries(entries);
};

exports.pwops = pwop;
exports.pwop = pwop;
exports.pwp = pwop;
