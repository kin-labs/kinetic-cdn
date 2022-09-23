DIST="${PWD}/dist/apps/demo"

cat "$DIST"/runtime* "$DIST"/polyfill* "$DIST"/main* > "$DIST"/kinetic-sdk.js

ls -lh "$DIST"/kinetic-sdk.js
