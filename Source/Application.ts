import express from "express";
import fs from "fs";
import https from "https";
import { EndpointConfig } from "./Config";
import Module from "./Modules/Module";

export default class Application {
    private readonly app: express.Application = express();
    protected get App() {
        return this.app;
    }

    private readonly endpointConfig: EndpointConfig;

    public constructor(globalConfig: EndpointConfig) {
        this.endpointConfig = globalConfig;
    }

    protected AddModule(module: Module): void {
        module.ApplyTo(this.App);
    }

    public Run() {
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