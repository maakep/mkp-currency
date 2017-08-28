"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get("/", function (req, res) {
    res.sendFile("/index.html", { root: "./" });
});
app.get("/*.(js|css|png)", function (req, res) {
    res.sendFile(req.url, { root: "./" });
});
exports["default"] = app;
