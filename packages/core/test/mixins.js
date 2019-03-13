/* leny/pwops/core
 *
 * /test/mixins.js - Test for custom mixins injection
 *
 * coded by leny
 * started at 13/03/2019
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

const {pwop, registerMixin} = require("../lib");

describe("Custom Mixins", () => {
    registerMixin("clearfix", customClearfixMixin);

    describe("clearfix", () => {
        it("Custom mixin is available", () => {
            assert.deepEqual(
                pwop({
                    color: "red",
                    clearfix: true,
                }),
                {
                    color: "red",
                    "&:before, &:after": {
                        content: `""`,
                        display: "table",
                    },
                    "&:after": {
                        clear: "both",
                    },
                },
            );
        });
        it("Custom mixin is available in nesting", () => {
            assert.deepEqual(
                pwop({
                    color: "red",
                    p: {
                        clearfix: [],
                    },
                }),
                {
                    color: "red",
                    p: {
                        "&:before, &:after": {
                            content: `""`,
                            display: "table",
                        },
                        "&:after": {
                            clear: "both",
                        },
                    },
                },
            );
        });
    });
});
