import express from "express";
import { HttpMethod, RouteHandler } from "./Route";
import RouteEntry from "./RouteEntry";
export default class Router {
    private readonly router;
    get Router(): express.Router;
    constructor();
    private path;
    set Path(path: string);
    get Path(): string;
    AddRouter(router: Router): void;
    AddRoute(method: HttpMethod, path: string, handler?: RouteHandler): void;
    AddRouteEntry(entry: RouteEntry): void;
}
