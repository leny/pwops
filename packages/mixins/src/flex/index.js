/* leny/pwops/mixins
 *
 * /src/flex/index.js - Flex mixin functions
 *
 * coded by leny
 * started at 12/03/2019
 */

const {registerMixin} = require("@pwops/core");

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

registerMixin("flexBox", (...values) => _flexbox("flex", ...values));
registerMixin("inlineFlexBox", (...values) =>
    _flexbox("inline-flex", ...values),
);
registerMixin("flexRow", (...values) => _flexbox("flex", "row", ...values));
registerMixin("inlineFlexRow", (...values) =>
    _flexbox("inline-flex", "row", ...values),
);
registerMixin("flexRowReverse", (...values) =>
    _flexbox("flex", "row-reverse", ...values),
);
registerMixin("inlineFlexRowReverse", (...values) =>
    _flexbox("inline-flex", "row-reverse", ...values),
);
registerMixin("flexColumn", (...values) =>
    _flexbox("flex", "column", ...values),
);
registerMixin("inlineFlexColumn", (...values) =>
    _flexbox("inline-flex", "column", ...values),
);
registerMixin("flexColumnReverse", (...values) =>
    _flexbox("flex", "column-reverse", ...values),
);
registerMixin("inlineFlexColumnReverse", (...values) =>
    _flexbox("inline-flex", "column-reverse", ...values),
);
