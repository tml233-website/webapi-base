import express from "express";
import fs from "fs";
import https from "https";
import { EndpointConfig } from "./Config";
import { AddRoute, DefaultRouteHandler, HttpMethod, RouteHandler } from "./Route";
import RouteEntry from "./RouteEntry";
import Router from "./Router";

export default class Application {
    private readonly app: express.Application;
    protected get App() {
        return this.app;
    }

    private readonly endpointConfig: EndpointConfig;

    constructor(globalConfig: EndpointConfig) {
        this.endpointConfig = globalConfig;
        this.app = express();
    }

    public AddRouter(router: Router) {
        this.App.use(router.Path, router.Router);
    }
    public AddRoute(method: HttpMethod, path: string, handler: RouteHandler = DefaultRouteHandler) {
        AddRoute(this.App, method, path, handler);
    }
    public AddRouteEntry(entry: RouteEntry) {
        this.AddRoute(entry.Method, entry.Path, entry.Handler);
    }
    

    Run() {
        let listenCallback = () => {
            console.log("Server started. Listening port " + this.endpointConfig.port);
        };

        if (!this.endpointConfig.httpsEnabled) {
            this.app.listen(this.endpointConfig.port, listenCallback);
        } else {
            let httpsOptions = {
                key: fs.readFileSync(this.endpointConfig.httpsKeys.privatePath),
                cert: fs.readFileSync(this.endpointConfig.httpsKeys.publicPath)
            }
            let httpsServer = https.createServer(httpsOptions, this.app);
            httpsServer.listen(this.endpointConfig.port, listenCallback);
        }
    }
}