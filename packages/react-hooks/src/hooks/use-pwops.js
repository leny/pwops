/* leny/pwops/react-hooks
 *
 * /src/hooks/use-pwops.js - usePwops
 *
 * coded by leny
 * started at 04/04/2020
 */

const {useMemo} =require(  "react" );
const {css} =require(  "@pwops/emotion-css" );

exports.usePwops = styles =>
    useMemo(
        () =>
            Object.fromEntries(
                Object.entries(styles).map(([key, value]) => [key, css(value)]),
            ),
        [styles],
    );
