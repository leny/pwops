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
    "Mixins:position": [
        [
            pwop({
                absolute: [0, "auto", rem(3.6)],
            }),
            {
                position: "absolute",
                top: 0,
                right: "auto",
                bottom: "3.6rem",
                left: "auto",
            },
        ],
        [
            pwop({
                static: [0, null, rem(3.6), "auto"],
            }),
            {
                position: "static",
                top: 0,
                bottom: "3.6rem",
                left: "auto",
            },
        ],
        [
            pwop({
                static: [0, false, rem(3.6), "auto"],
            }),
            {
                position: "static",
                top: 0,
                bottom: "3.6rem",
                left: "auto",
            },
        ],
        [
            pwop({
                fixed: [],
            }),
            {
                position: "fixed",
            },
        ],
        [
            pwop({
                relative: [0],
            }),
            {
                position: "relative",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },
        ],
        [
            pwop({sticky: rem(3.6)}),
            {
                position: "sticky",
                top: "3.6rem",
                right: "3.6rem",
                bottom: "3.6rem",
                left: "3.6rem",
            },
        ],
    ],
    "Mixins:size": [
        [
            pwop({
                size: rem(12),
            }),
            {
                width: "12rem",
                height: "12rem",
            },
        ],
        [
            pwop({
                minSize: [rem(12), rem(6)],
            }),
            {
                minWidth: "12rem",
                minHeight: "6rem",
            },
        ],
        [
            pwop({
                maxSize: [],
            }),
            {
                maxWidth: 0,
                maxHeight: 0,
            },
        ],
    ],
};

describe("pwop()", () => {
    Object.entries(cases).forEach(([name, tests]) => {
        describe(name, () => {
            tests.forEach(([result, expected], index) =>
                it(`${name}: case ${index + 1}`, () =>
                    assert.deepEqual(result, expected)),
            );
        });
    });
});
