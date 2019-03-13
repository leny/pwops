/* leny/pwops
 *
 * /src/mixins/custom/index.js - Custom Mixins handling
 *
 * coded by leny
 * started at 13/03/2019
 */

const store = {};

exports.registerMixin = (name, mixin) => {
    store[name] = mixin;
};

exports.customMixins = store;
