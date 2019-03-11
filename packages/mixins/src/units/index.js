/* leny/pwops
 *
 * /src/units/index.js - Units functions
 *
 * coded by leny
 * started at 11/03/2019
 */

const {units} = require("../data");

const checkNumber = value => {
    if (isNaN(+value)) {
        throw new TypeError("Expect a Number");
    }
    return true;
};

const checkZero = value => (value === 0 ? "0" : false);

const withUnit = suffix => (value = 0) =>
    checkNumber(value) && (checkZero(value) || `${value}${suffix}`);

units.forEach(unit => {
    let name = unit;

    switch (unit) {
        case "in":
            name = "inch";
            break;
        // no default
    }
    exports[name] = withUnit(unit);
});

exports.percent = (value = 0, withDecimal = false) =>
    withUnit("%")(value * (withDecimal ? 100 : 1));
