"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const https_1 = __importDefault(require("https"));
const Route_1 = require("./Route");
class Application {
    get App() {
        return this.app;
    }
    constructor(globalConfig) {
        this.endpointConfig = globalConfig;
        this.app = (0, express_1.default)();
    }
    AddRouter(router) {
        this.App.use(router.Path, router.Router);
    }
    AddRoute(method, path, handler = Route_1.DefaultRouteHandler) {
        (0, Route_1.AddRoute)(this.App, method, path, handler);
    }
    AddRouteEntry(entry) {
        this.AddRoute(entry.Method, entry.Path, entry.Handler);
    }
    Run() {
        let listenCallback = () => {
            console.log("Server started. Listening port " + this.endpointConfig.port);
        };
        if (!this.endpointConfig.httpsEnabled) {
            this.app.listen(this.endpointConfig.port, listenCallback);
        }
        else {
            let httpsOptions = {
                key: fs_1.default.readFileSync(this.endpointConfig.httpsKeys.privatePath),
                cert: fs_1.default.readFileSync(this.endpointConfig.httpsKeys.publicPath)
            };
            let httpsServer = https_1.default.createServer(httpsOptions, this.app);
            httpsServer.listen(this.endpointConfig.port, listenCallback);
        }
    }
}
exports.default = Application;
