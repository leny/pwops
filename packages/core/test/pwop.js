/* leny/pwops
 *
 * /test/pwop.js - Test for pwop function
 *
 * coded by leny
 * started at 11/03/2019
 */

const assert = require("assert");

const {pwop, rem, percent, s} = require("../lib");

const cases = {
    "Basic use cases": [
        [
            pwop({
                color: "red",
                margin: [0, "auto", rem(3.6)],
            }),
            {
                color: "red",
                margin: "0 auto 3.6rem",
            },
        ],
        [
            pwop({
                width: percent(100),
                "z-index": 10,
            }),
            {width: "100%", zIndex: 10},
        ],
        [
            pwop({
                transition: [
                    ["color", s(1)],
                    ["margin-right", s(2), "ease-out"],
                ],
            }),
            {transition: "color 1s, margin-right 2s ease-out"},
        ],
    ],
};

describe("pwop()", () => {
    Object.entries(cases).forEach(([name, tests]) => {
        it(name, () => {
            tests.forEach(([result, expected]) =>
                assert.deepEqual(result, expected),
            );
        });
    });
});
