"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddRoute = exports.DefaultRouteHandler = exports.HttpMethod = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
var HttpMethod;
(function (HttpMethod) {
    HttpMethod[HttpMethod["Get"] = 0] = "Get";
    HttpMethod[HttpMethod["Post"] = 1] = "Post";
    HttpMethod[HttpMethod["Put"] = 2] = "Put";
    HttpMethod[HttpMethod["Delete"] = 3] = "Delete";
    HttpMethod[HttpMethod["Patch"] = 4] = "Patch";
})(HttpMethod = exports.HttpMethod || (exports.HttpMethod = {}));
const DefaultRouteHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(501).json({ message: "Not implemented." });
});
exports.DefaultRouteHandler = DefaultRouteHandler;
function AddRoute(router, method, path, handler = exports.DefaultRouteHandler) {
    switch (method) {
        case HttpMethod.Get:
            router.get(path, (0, express_async_handler_1.default)(handler));
            break;
        case HttpMethod.Post:
            router.post(path, (0, express_async_handler_1.default)(handler));
            break;
        case HttpMethod.Put:
            router.put(path, (0, express_async_handler_1.default)(handler));
            break;
        case HttpMethod.Delete:
            router.delete(path, (0, express_async_handler_1.default)(handler));
            break;
        case HttpMethod.Patch:
            router.patch(path, (0, express_async_handler_1.default)(handler));
            break;
        default:
            throw new Error("Unknown HttpMethod!");
    }
}
exports.AddRoute = AddRoute;
