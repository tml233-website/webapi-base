import express from "express";
import { EndpointConfig } from "./Config";
import { HttpMethod, RouteHandler } from "./Route";
import RouteEntry from "./RouteEntry";
import Router from "./Router";
export default class Application {
    private readonly app;
    protected get App(): express.Application;
    private readonly endpointConfig;
    constructor(globalConfig: EndpointConfig);
    AddRouter(router: Router): void;
    AddRoute(method: HttpMethod, path: string, handler?: RouteHandler): void;
    AddRouteEntry(entry: RouteEntry): void;
    Run(): void;
}
