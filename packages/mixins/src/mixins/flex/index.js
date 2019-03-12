/* leny/pwops
 *
 * /src/mixins/flex/index.js - Flex mixin functions
 *
 * coded by leny
 * started at 12/03/2019
 */

const _flexbox = (type, direction, mainAxis, secondaryAxis, wrap) => {
    const entries = {
        display: type,
    };

    direction && (entries.flexDirection = direction);
    mainAxis && (entries.justifyContent = mainAxis);
    secondaryAxis && (entries.alignItems = secondaryAxis);
    wrap && (entries.flexWrap = wrap);

    return entries;
};

exports.flexBox = (...values) => _flexbox("flex", ...values);
exports.inlineFlexBox = (...values) => _flexbox("inline-flex", ...values);
exports.flexRow = (...values) => _flexbox("flex", "row", ...values);
exports.inlineFlexRow = (...values) =>
    _flexbox("inline-flex", "row", ...values);
exports.flexRowReverse = (...values) =>
    _flexbox("flex", "row-reverse", ...values);
exports.inlineFlexRowReverse = (...values) =>
    _flexbox("inline-flex", "row-reverse", ...values);
exports.flexColumn = (...values) => _flexbox("flex", "column", ...values);
exports.inlineFlexColumn = (...values) =>
    _flexbox("inline-flex", "column", ...values);
exports.flexColumnReverse = (...values) =>
    _flexbox("flex", "column-reverse", ...values);
exports.inlineFlexColumnReverse = (...values) =>
    _flexbox("inline-flex", "column-reverse", ...values);
