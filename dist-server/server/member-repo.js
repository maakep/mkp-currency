"use strict";
exports.__esModule = true;
var fs = require("fs");
var Members = (function () {
    function Members(server) {
        this.getMembersFile(function (data) {
            server.setMembers(data);
        });
    }
    Members.prototype.getMembersFile = function (cb) {
        fs.readFile("members.json", function (err, data) {
            if (!err) {
                var memberData = JSON.parse(data);
                memberData = memberData.sort(function (a, b) {
                    if (a.amount > b.amount)
                        return -1;
                    if (a.amount < b.amount)
                        return 1;
                    return 0;
                });
                cb(memberData);
            }
            else {
                console.log("fs readfile error: " + err);
            }
        });
    };
    return Members;
}());
exports.Members = Members;
