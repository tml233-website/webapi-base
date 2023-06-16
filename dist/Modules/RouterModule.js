"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Module_1 = __importDefault(require("./Module"));
class RouterModule extends Module_1.default {
    constructor() {
        super(...arguments);
        this.router = express_1.default.Router();
        this.path = "";
    }
    get Router() {
        return this.router;
    }
    set Path(path) {
        this.path = path;
    }
    get Path() {
        return this.path;
    }
    ApplyTo(router) {
        router.use(this.Path, this.Router);
    }
    AddModule(module) {
        module.ApplyTo(this.Router);
    }
}
exports.default = RouterModule;
