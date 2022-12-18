"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Route_1 = require("./Route");
class Router {
    get Router() {
        return this.router;
    }
    constructor() {
        this.path = "";
        this.router = express_1.default.Router();
    }
    set Path(path) {
        this.path = path;
    }
    get Path() {
        return this.path;
    }
    AddRouter(router) {
        this.Router.use(router.Path, router.Router);
    }
    AddRoute(method, path, handler = Route_1.DefaultRouteHandler) {
        (0, Route_1.AddRoute)(this.Router, method, path, handler);
    }
    AddRouteEntry(entry) {
        this.AddRoute(entry.Method, entry.Path, entry.Handler);
    }
}
exports.default = Router;
