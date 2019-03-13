/* leny/pwops/core
 *
 * /src/mixins/index.js - Mixins functions
 *
 * coded by leny
 * started at 12/03/2019
 */

const store = {};

exports.registerMixin = (name, mixin) => {
    store[name] = mixin;
};

exports.mixins = store;
