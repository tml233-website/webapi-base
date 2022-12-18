import express from "express";
import { AddRoute, DefaultRouteHandler, HttpMethod, RouteHandler } from "./Route";
import RouteEntry from "./RouteEntry";

export default class Router {
    private readonly router: express.Router;
    public get Router() {
        return this.router;
    }
    constructor() {
        this.router = express.Router();
    }

    private path: string = "";
    public set Path(path) {
        this.path = path;
    }
    public get Path() {
        return this.path;
    }

    public AddRouter(router: Router) {
        this.Router.use(router.Path, router.Router);
    }
    public AddRoute(method: HttpMethod, path: string, handler: RouteHandler = DefaultRouteHandler) {
        AddRoute(this.Router, method, path, handler);
    }
    public AddRouteEntry(entry: RouteEntry) {
        this.AddRoute(entry.Method, entry.Path, entry.Handler);
    }
}