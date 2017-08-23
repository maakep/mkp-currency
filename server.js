"use strict";
exports.__esModule = true;
var http = require("http");
var app_1 = require("./app");
var Server = (function () {
    function Server() {
        this.port = '3000';
        this.server = http.createServer(app_1["default"]);
        this.server.listen(this.port);
        console.log("Listening on :" + this.port);
    }
    return Server;
}());
var server = new Server();
