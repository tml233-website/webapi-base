"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = require("./Route");
class RouteEntry {
    constructor() {
        this.method = Route_1.HttpMethod.Get;
        this.path = "";
        this.handler = Route_1.DefaultRouteHandler;
    }
    set Method(method) {
        this.method = method;
    }
    get Method() {
        return this.method;
    }
    set Path(path) {
        this.path = path;
    }
    get Path() {
        return this.path;
    }
    get Handler() {
        return this.handler;
    }
    set Handler(handler) {
        this.handler = handler;
    }
}
exports.default = RouteEntry;
