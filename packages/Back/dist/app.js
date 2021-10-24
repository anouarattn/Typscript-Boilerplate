"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const utils_1 = require("../../Shared/dist/utils");
// Create Express server
const app = (0, express_1.default)();
// Express configuration
app.set("port", process.env.PORT || 3000);
app.get("/", (req, res) => {
    res.send("Hello worldddsdd!" + (0, utils_1.randomString)());
});
exports.default = app;
//# sourceMappingURL=app.js.map