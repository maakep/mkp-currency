"use strict";
exports.__esModule = true;
function root(input) {
    if (input === void 0) { input = ""; }
    var root = "../../";
    if (input[0] !== "/") {
        root += "/";
    }
    return root + input;
}
exports["default"] = root;
