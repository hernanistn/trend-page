"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Server_1 = __importDefault(require("./express/Server"));
var server = new Server_1.default();
server.initialize();
