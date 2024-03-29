"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = process.env.PORT || 3000;
app.listen(port, function () {
    // if (err) {
    // 	return console.error(err);
    // }
    return console.log("server is listening on " + port);
});
app.get("/", function (req, res) {
    console.log("main page");
    res.send({
        msg: "you have gotted this on port " + port
    });
});
app.get("/potato", function (req, res) {
    console.log("potato");
    res.send({
        msg: "potato"
    });
});
//# sourceMappingURL=app.js.map