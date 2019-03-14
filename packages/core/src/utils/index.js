/* leny/pwops/core
 *
 * /src/utils/index.js - Utils functions
 *
 * coded by leny
 * started at 14/03/2019
 */

import fromEntries from "lodash.frompairs";

const _important=(target)=>{
    if (Array.isArray(target)){
        return [...target,"!important"];
    }
    if (target===Object(target)){
        return fromEntries(Object.entries(target).map(([key,value])=>[key,_important(value)]))
    }
    return `${target} !important`;
};

exports.important=_important;
