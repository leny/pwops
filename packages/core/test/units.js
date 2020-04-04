/* leny/pwops/core
 *
 * /test/units.js - Test for units functions
 *
 * coded by leny
 * started at 11/03/2019
 */

const assert = require("assert");
const {units} = require("../src/data");

const unitsMethods = require("../lib/cjs");

describe("Units functions", () => {
    units.forEach(name => {
        const methodName = name === "in" ? "inch" : name;
        const method = unitsMethods[methodName];

        describe(`${methodName}()`, () => {
            it(`Should return a correct ${name} value when a number is given`, () => {
                assert.strictEqual(method(1), `1${name}`);
                assert.strictEqual(method(-1), `-1${name}`);
                assert.strictEqual(method(0.2), `0.2${name}`);
                assert.strictEqual(method(1.2), `1.2${name}`);
                assert.strictEqual(method(1 / 4), `0.25${name}`);
                assert.strictEqual(method(1 / 3), `0.3333333333333333${name}`);
            });

            it("Should return an unit-less zero when zero is given", () => {
                assert.strictEqual(method(0), "0");
            });

            it("Should return an unit-less zero when nothing is given", () => {
                assert.strictEqual(method(), "0");
            });

            it("Should throw if the given value is not a number", () => {
                assert.throws(() => method("yeah"), TypeError);
            });
        });
    });

    describe("percent()", () => {
        const {percent} = unitsMethods;

        it("Should return a correct % value when a number is given", () => {
            assert.strictEqual(percent(12.5), "12.5%");
            assert.strictEqual(percent(100 / 4), "25%");
            assert.strictEqual(percent(100), "100%");
            assert.strictEqual(percent(-50), "-50%");
            assert.strictEqual(percent(100 / 3), "33.333333333333336%"); // Well, f*ck you.
        });

        it("Should return a correct % value when a number is given with the decimal boolean flag", () => {
            assert.strictEqual(percent(0.01, true), "1%");
            assert.strictEqual(percent(0.5, true), "50%");
            assert.strictEqual(percent(-0.5, true), "-50%");
            assert.strictEqual(percent(0.125, true), "12.5%");
            assert.strictEqual(percent(12.5, true), "1250%");
            assert.strictEqual(percent(1 / 4, true), "25%");
            assert.strictEqual(percent(1, true), "100%");
            assert.strictEqual(percent(1 / 3, true), "33.33333333333333%");
        });

        it("Should return an unit-less zero when zero is given", () => {
            assert.strictEqual(percent(0), "0");
        });

        it("Should return an unit-less zero when nothing is given", () => {
            assert.strictEqual(percent(), "0");
        });

        it("Should throw if the given value is not a number", () => {
            assert.throws(() => percent("yeah"), TypeError);
        });
    });
});
