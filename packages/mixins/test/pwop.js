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
    "basic usage": [
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
    nesting: [
        [
            pwop({
                color: "red",
                "&:hover": {color: "blue"},
            }),
            {
                color: "red",
                "&:hover": {color: "blue"},
            },
        ],
        [
            pwop({
                color: "red",
                "@media(min-width: 960px)": {
                    color: "blue",
                    "&:hover ~ p": {
                        opacity: 0.5,
                    },
                },
            }),
            {
                color: "red",
                "@media(min-width: 960px)": {
                    color: "blue",
                    "&:hover ~ p": {
                        opacity: 0.5,
                    },
                },
            },
        ],
        [
            pwop({
                absolute: [0, "auto", rem(3.6)],
                "@media screen": {
                    fixed: [rem(1), "auto"],
                },
            }),
            {
                position: "absolute",
                top: 0,
                right: "auto",
                bottom: "3.6rem",
                left: "auto",
                "@media screen": {
                    position: "fixed",
                    top: "1rem",
                    right: "auto",
                    bottom: "1rem",
                    left: "auto",
                },
            },
        ],
        [
            pwop({
                transition: [
                    ["color", s(1)],
                    ["margin-right", s(2), "ease-out"],
                ],
                "@media screen": {
                    transition: [
                        ["color", s(3)],
                        ["margin-left", s(5), "ease-in-out"],
                    ],
                },
            }),
            {
                transition: "color 1s, margin-right 2s ease-out",
                "@media screen": {
                    transition: "color 3s, margin-left 5s ease-in-out",
                },
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
