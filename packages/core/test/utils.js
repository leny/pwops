/* leny/pwops/core
 *
 * /test/utils.js - Test for utils
 *
 * coded by leny
 * started at 14/03/2019
 */

const assert = require("assert");

const customClearfixMixin = () => ({
    "&:before, &:after": {
        content: `""`,
        display: "table",
    },
    "&:after": {
        clear: "both",
    },
});

const {pwop, important, translateX, rem} = require("../lib/cjs");

describe("important()", () => {
    it("Adds !important for simple/primitive values", () => {
        assert.deepEqual(
            pwop({
                width: important(rem(5)),
                color: important("red"),
                opacity: important(0),
                transform: important(translateX(rem(2.5))),
            }),
            {
                width: "5rem !important",
                color: "red !important",
                opacity: "0 !important",
                transform: "translateX(2.5rem) !important",
            },
        );
    });
    it("Adds !important for complex/multiple values", () => {
        assert.deepEqual(
            pwop({
                font: important(["normal", rem(2), "Helvetica"]),
            }),
            {
                font: "normal 2rem Helvetica !important",
            },
        );
        assert.deepEqual(
            pwop(
                important({
                    width: rem(5),
                    color: "red",
                    opacity: 0,
                    transform: translateX(rem(2.5)),
                }),
            ),
            {
                width: "5rem !important",
                color: "red !important",
                opacity: "0 !important",
                transform: "translateX(2.5rem) !important",
            },
        );
    });
});
