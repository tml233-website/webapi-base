"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const fs_1 = __importDefault(require("fs"));
const https_1 = __importDefault(require("https"));
const ApiEntry_1 = require("./ApiEntry");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
class Application {
    get App() {
        return this.app;
    }
    constructor(globalConfig) {
        this.endpointConfig = globalConfig;
        this.app = (0, express_1.default)();
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    AddApiEntry(entry) {
        if (!entry.Handler) {
            throw new Error("ApiEntry does not have a handler!");
        }
        switch (entry.Method) {
            case ApiEntry_1.HttpMethod.Get:
                this.app.get(entry.Path, (0, express_async_handler_1.default)(entry.Handler));
                break;
            case ApiEntry_1.HttpMethod.Post:
                this.app.post(entry.Path, (0, express_async_handler_1.default)(entry.Handler));
                break;
            case ApiEntry_1.HttpMethod.Put:
                this.app.put(entry.Path, (0, express_async_handler_1.default)(entry.Handler));
                break;
            case ApiEntry_1.HttpMethod.Delete:
                this.app.delete(entry.Path, (0, express_async_handler_1.default)(entry.Handler));
                break;
            case ApiEntry_1.HttpMethod.Patch:
                this.app.patch(entry.Path, (0, express_async_handler_1.default)(entry.Handler));
                break;
            default:
                throw new Error("Unknown HttpMethod!");
        }
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
exports.Application = Application;
