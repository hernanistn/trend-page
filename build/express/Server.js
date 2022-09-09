"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Routes_1 = require("./Routes");
var Server = /** @class */ (function () {
    function Server() {
        this.app = (0, express_1.default)();
    }
    Server.prototype.initialize = function () {
        var port = 3001;
        this.app.use(Routes_1.router);
        this.app.listen(port, function () { return console.log("Server is nunning on port " + port); });
    };
    return Server;
}());
exports.default = Server;
