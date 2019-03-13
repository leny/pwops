/* leny/pwops/emotion-css
 *
 * /src/index.js - Entry point
 *
 * coded by leny
 * started at 13/03/2019
 */

const emotionCSS = require("@emotion/css").default;
const {pwop} = require("@pwops/core");

exports.css = obj => emotionCSS(pwop(obj));
