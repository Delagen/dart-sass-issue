"use strict";
const path = require("path");
const fs = require("fs");
const sass = require("sass");

sass.render({
    includePaths:      ["tmp/build/public", "public"],
    file: path.resolve(__dirname, "./test.scss"),
    sourceMap: true,
    sourceMapContents: true,
    importer: function (url, prev, done) {
        return done({file: url.replace("~", "./node_modules/")});
    },
    functions: {
        "inline-image($file)": function (file, done) {
            console.log(file);
            done(new sass.types.String("url('')"));
        }
    }
}, function (err, css) {
    if (err) {
        console.error(err);
        return;
    }
    fs.writeFileSync("build.api.css", css.css);
});
