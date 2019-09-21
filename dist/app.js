"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = 3000;
app.get('/', function (req, res) {
    res.send('The sedulous hyena ate the antelope!');
});
app.listen(port, function (err) {
    if (err) {
        return console.error(err);
    }
    return console.log("server is listening on " + port);
});
app.get("/", function (req, res) {
    console.log("main page");
    res.send({
        msg: "you have gotted this"
    });
});
app.get("/potato", function (req, res) {
    console.log("potato");
    res.send({
        msg: "potato"
    });
});
//# sourceMappingURL=app.js.map