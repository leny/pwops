/* leny/pwops/mixins
 *
 * /test/mixins.js - Test for mixins
 *
 * coded by leny
 * started at 13/03/2019
 */

const assert = require("assert");

const {pwop, rem} = require("@pwops/core");

require("../lib");

const cases = {
    position: [
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
    size: [
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
    "flex:flexBox": [
        [
            pwop({
                flexBox: [],
            }),
            {display: "flex"},
        ],
        [
            pwop({
                flexBox: ["column"],
            }),
            {
                display: "flex",
                flexDirection: "column",
            },
        ],
        [
            pwop({
                flexBox: ["column", "end"],
            }),
            {
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
            },
        ],
        [
            pwop({
                flexBox: ["row", "space-evenly", "center"],
            }),
            {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
            },
        ],
        [
            pwop({
                inlineFlexBox: [
                    "row-reverse",
                    "space-between",
                    "stretch",
                    "wrap",
                ],
            }),
            {
                display: "inline-flex",
                flexDirection: "row-reverse",
                justifyContent: "space-between",
                alignItems: "stretch",
                flexWrap: "wrap",
            },
        ],
    ],
    "flex:flexRow": [
        [
            pwop({
                flexRow: [],
            }),
            {display: "flex", flexDirection: "row"},
        ],
        [
            pwop({
                flexRow: ["end"],
            }),
            {
                display: "flex",
                flexDirection: "row",
                justifyContent: "end",
            },
        ],
        [
            pwop({
                inlineFlexRow: ["space-evenly", "center"],
            }),
            {
                display: "inline-flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
            },
        ],
        [
            pwop({
                flexRowReverse: ["space-between", "stretch", "wrap"],
            }),
            {
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "space-between",
                alignItems: "stretch",
                flexWrap: "wrap",
            },
        ],
        [
            pwop({
                inlineFlexRowReverse: ["space-between", "stretch", "wrap"],
            }),
            {
                display: "inline-flex",
                flexDirection: "row-reverse",
                justifyContent: "space-between",
                alignItems: "stretch",
                flexWrap: "wrap",
            },
        ],
    ],
    "flex:flexColumn": [
        [
            pwop({
                flexColumn: [],
            }),
            {display: "flex", flexDirection: "column"},
        ],
        [
            pwop({
                flexColumn: ["end"],
            }),
            {
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
            },
        ],
        [
            pwop({
                inlineFlexColumn: ["space-evenly", "center"],
            }),
            {
                display: "inline-flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
            },
        ],
        [
            pwop({
                flexColumnReverse: ["space-between", "stretch", "wrap"],
            }),
            {
                display: "flex",
                flexDirection: "column-reverse",
                justifyContent: "space-between",
                alignItems: "stretch",
                flexWrap: "wrap",
            },
        ],
        [
            pwop({
                inlineFlexColumnReverse: ["space-between", "stretch", "wrap"],
            }),
            {
                display: "inline-flex",
                flexDirection: "column-reverse",
                justifyContent: "space-between",
                alignItems: "stretch",
                flexWrap: "wrap",
            },
        ],
    ],
};

describe("mixins", () => {
    Object.entries(cases).forEach(([name, tests]) => {
        describe(name, () => {
            tests.forEach(([result, expected], index) =>
                it(`${name}: case ${index + 1}`, () =>
                    assert.deepEqual(result, expected)),
            );
        });
    });
});
