DIST="${PWD}/dist/apps/demo"

ls -lh "$DIST"/runtime*.js
ls -lh "$DIST"/polyfill*.js
ls -lh "$DIST"/main*.js

cat "$DIST"/runtime* "$DIST"/polyfill* "$DIST"/main* > "$DIST"/kinetic-sdk.js

ls -lh "$DIST"/runtime*.js
ls -lh "$DIST"/polyfill*.js
ls -lh "$DIST"/main*.js
ls -lh "$DIST"/kinetic-sdk.js

cp -v "$DIST"/kinetic-sdk.js ./kinetic-cdn-build//
