"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.get("/*.js", function (req, res) {
    res.sendFile(__dirname + req.url);
});
app.get("/*.(js|.css)", function (req, res) {
    res.sendFile(__dirname + req.url);
});
exports["default"] = app;
