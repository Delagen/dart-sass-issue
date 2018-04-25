"use strict";
const path = require("path");
const fs = require("fs");
const sass = require("sass");

sass.render({
    file: path.resolve(__dirname, "./node_modules/bootstrap/scss/bootstrap.scss"),
    logger: {
        warn: function (message/*, fileSpan, trace, deprecation*/) {
            console.log(arguments);
        },
        debug: function (message/*, fileSpan*/) {
            console.log(arguments);
        }
    }
}, function (err, css) {
    if (err) {
        console.error(err);
        return;
    }
    fs.writeFileSync("build.api.css", css.css);
});
