"use strict";
exports.__esModule = true;
var http = require("http");
var app_1 = require("./app");
var member_repo_1 = require("./member-repo");
var Server = (function () {
    function Server() {
        this.port = '3000';
        this.server = http.createServer(app_1["default"]);
        this.server.listen(this.port);
        console.log("Listening on :" + this.port);
        this.configureRouting();
    }
    Server.prototype.setMembers = function (m) {
        this.members = m;
        console.log(this.members);
    };
    Server.prototype.configureRouting = function () {
        var _this = this;
        app_1["default"].get("/members", function (req, res) {
            res.send(_this.members);
        });
    };
    return Server;
}());
exports.Server = Server;
var server = new Server();
var mem = new member_repo_1.Members(server);
