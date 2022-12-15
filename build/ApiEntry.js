"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiEntry = exports.HttpMethod = void 0;
var HttpMethod;
(function (HttpMethod) {
    HttpMethod[HttpMethod["Get"] = 0] = "Get";
    HttpMethod[HttpMethod["Post"] = 1] = "Post";
    HttpMethod[HttpMethod["Put"] = 2] = "Put";
    HttpMethod[HttpMethod["Delete"] = 3] = "Delete";
    HttpMethod[HttpMethod["Patch"] = 4] = "Patch";
})(HttpMethod = exports.HttpMethod || (exports.HttpMethod = {}));
class ApiEntry {
    constructor() {
        this.method = HttpMethod.Get;
        this.path = "";
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
exports.ApiEntry = ApiEntry;
