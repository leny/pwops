/* leny/pwops/core
 *
 * /test/functions.js - Test for css functions
 *
 * coded by leny
 * started at 13/03/2019
 */

const assert = require("assert");

const cssFunctions = require("../lib");

describe("CSS functions", () => {
    Object.entries({
        attr: ["attr", 1, 2],
        blur: ["blur", 1, 1],
        brightness: ["brightness", 1, 1],
        calc: ["calc", 1, 1],
        circle: ["circle", 1, 1],
        clamp: ["clamp", 3, 3],
        conicGradient: ["conic-gradient", 2, Infinity],
        contrast: ["contrast", 1, 1],
        crossFade: ["cross-fade", 2, Infinity],
        cubicBezier: ["cubic-bezier", 4,4],
        dropShadow: ["drop-shadow", 2, 5],
        element: ["element", 1, 1],
        ellipse: ["ellipse", 1, 1],
        env: ["env", 1, 2],
        fitContent: ["fit-content", 1, 1],
        grayscale: ["grayscale", 1, 1],
        hsl: ["hsl", 1, 4],
        hsla: ["hsla", 1, 4],
        hueRotate: ["hue-rotate", 1, 1],
        image: ["image", 1, Infinity],
        imageSet: ["image-set", 1, Infinity],
        inset: ["inset", 1, 5],
        invert: ["invert", 1, 1],
        leader: ["leader", 1, 1],
        linearGradient: ["linear-gradient", 2, Infinity],
        matrix: ["matrix", 6, 6],
        matrix3d: ["matrix3d", 16, 16],
        max: ["max", 1, Infinity],
        min: ["min", 1, Infinity],
        minmax: ["minmax", 2, 2],
        opacity: ["opacity", 1, 1],
        perspective: ["perspective", 1, 1],
        polygon: ["polygon", 2, Infinity],
        radialGradient: ["radial-gradient", 2, Infinity],
        repeatingLinearGradient: ["repeating-linear-gradient", 2, Infinity],
        repeatingRadialGradient: ["repeating-radial-gradient", 2, Infinity],
        rgb: ["rgb", 1, 4],
        rgba: ["rgba", 1, 4],
        rotate: ["rotate", 1, 1],
        rotate3d: ["rotate3d", 1, 4],
        rotateX: ["rotateX", 1, 1],
        rotateY: ["rotateY", 1, 1],
        rotateZ: ["rotateZ", 1, 1],
        saturate: ["saturate", 1, 1],
        scale: ["scale", 1, 2],
        scale3d: ["scale3d", 3, 3],
        scaleX: ["scaleX", 1, 1],
        scaleY: ["scaleY", 1, 1],
        scaleZ: ["scaleZ", 1, 1],
        skew: ["skew", 1, 2],
        skewX: ["skewX", 1, 1],
        skewY: ["skewY", 1, 1],
        sepia: ["sepia", 1, 1],
        steps: ["steps", 1, Infinity],
        targetCounter: ["target-counter", 2, 3],
        targetCounters: ["target-counters", 3, 4],
        targetText: ["target-text", 1, 2],
        translate: ["translate", 1, 2],
        translate3d: ["translate3d", 1, 3],
        translateX: ["translateX", 1, 1],
        translateY: ["translateY", 1, 1],
        translateZ: ["translateZ", 1, 1],
        url: ["url", 1, 1],
        cssVar: ["var", 1, 1],
    }).forEach(([func, [name, minArgs, maxArgs]]) => {
        const [min, max] = [minArgs, maxArgs === Infinity ? 20 : maxArgs];
        const method = cssFunctions[func];

        describe(`${func}()`, () => {
            it(`Should return a correct ${name}() when correctly filled`, () => {
                for (let i = min; i < max; i++) {
                    const args = Array(i).fill("foo", 0, i);

                    assert.strictEqual(
                        method(...args),
                        `${name}(${args.join(", ")})`,
                    );
                }
            });

            it(`Should throw if a wrong amount of arguments is passed to ${func}`, () => {
                const treshold = maxArgs === Infinity ? min - 1 : max + 1;
                const args = Array(treshold).fill("foo", 0, treshold);

                assert.throws(() => method(...args), TypeError);
            });
        });
    });
});
