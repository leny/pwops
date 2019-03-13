/* leny/pwops/core
 *
 * /src/functions/index.js - CSS functions
 *
 * coded by leny
 * started at 13/03/2019
 */

const _func = (name, min, max) => (...args) => {
    if (args.length < min || args.length > max) {
        throw new TypeError(`Wrong numbers of arguments in ${name}()`);
    }
    return `${name}(${args.join(", ")})`;
};

exports.attr = _func("attr", 1, 2);
exports.blur = _func("blur", 1, 1);
exports.brightness = _func("brightness", 1, 1);
exports.calc = _func("calc", 1, 1);
exports.circle = _func("circle", 1, 1);
exports.clamp = _func("clamp", 3, 3);
exports.conicGradient = _func("conic-gradient", 2, Infinity);
exports.contrast = _func("contrast", 1, 1);
exports.crossFade = _func("cross-fade", 2, Infinity);
exports.cubicBezier = _func("cubic-bezier", 4, 4);
exports.dropShadow = _func("drop-shadow", 2, 5);
exports.element = _func("element", 1, 1);
exports.ellipse = _func("ellipse", 1, 1);
exports.env = _func("env", 1, 2);
exports.fitContent = _func("fit-content", 1, 1);
exports.grayscale = _func("grayscale", 1, 1);
exports.hsl = _func("hsl", 1, 4);
exports.hsla = _func("hsla", 1, 4);
exports.hueRotate = _func("hue-rotate", 1, 1);
exports.image = _func("image", 1, Infinity);
exports.imageSet = _func("image-set", 1, Infinity);
exports.inset = _func("inset", 1, 5);
exports.invert = _func("invert", 1, 1);
exports.leader = _func("leader", 1, 1);
exports.linearGradient = _func("linear-gradient", 2, Infinity);
exports.matrix = _func("matrix", 6, 6);
exports.matrix3d = _func("matrix3d", 16, 16);
exports.max = _func("max", 1, Infinity);
exports.min = _func("min", 1, Infinity);
exports.minmax = _func("minmax", 2, 2);
exports.opacity = _func("opacity", 1, 1);
exports.perspective = _func("perspective", 1, 1);
exports.polygon = _func("polygon", 2, Infinity);
exports.radialGradient = _func("radial-gradient", 2, Infinity);
exports.repeatingLinearGradient = _func(
    "repeating-linear-gradient",
    2,
    Infinity,
);
exports.repeatingRadialGradient = _func(
    "repeating-radial-gradient",
    2,
    Infinity,
);
exports.rgb = _func("rgb", 1, 4);
exports.rgba = _func("rgba", 1, 4);
exports.rotate = _func("rotate", 1, 1);
exports.rotate3d = _func("rotate3d", 1, 4);
exports.rotateX = _func("rotateX", 1, 1);
exports.rotateY = _func("rotateY", 1, 1);
exports.rotateZ = _func("rotateZ", 1, 1);
exports.saturate = _func("saturate", 1, 1);
exports.scale = _func("scale", 1, 2);
exports.scale3d = _func("scale3d", 3, 3);
exports.scaleX = _func("scaleX", 1, 1);
exports.scaleY = _func("scaleY", 1, 1);
exports.scaleZ = _func("scaleZ", 1, 1);
exports.skew = _func("skew", 1, 2);
exports.skewX = _func("skewX", 1, 1);
exports.skewY = _func("skewY", 1, 1);
exports.sepia = _func("sepia", 1, 1);
exports.steps = _func("steps", 1, Infinity);
exports.targetCounter = _func("target-counter", 2, 3);
exports.targetCounters = _func("target-counters", 3, 4);
exports.targetText = _func("target-text", 1, 2);
exports.translate = _func("translate", 1, 2);
exports.translate3d = _func("translate3d", 1, 3);
exports.translateX = _func("translateX", 1, 1);
exports.translateY = _func("translateY", 1, 1);
exports.translateZ = _func("translateZ", 1, 1);
exports.url = _func("url", 1, 1);
exports.cssVar = _func("var", 1, 1);
