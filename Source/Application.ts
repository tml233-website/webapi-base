import express from "express";
import cors from "cors";
import fs from "fs";
import https from "https";
import { EndpointConfig } from "./Config";
import { ApiEntry, HttpMethod } from "./ApiEntry";
import asyncHandler from "express-async-handler";

export class Application {
    private app: express.Application;
    private endpointConfig: EndpointConfig;

    constructor(globalConfig: EndpointConfig) {
        this.endpointConfig = globalConfig;

        this.app = express();
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    public AddApiEntry(entry: ApiEntry) {
        if (!entry.Handler) {
            throw new Error("ApiEntry does not have a handler!");
        }

        switch (entry.Method) {
            case HttpMethod.Get:
                this.app.get(entry.Path, asyncHandler(entry.Handler));
                break;
            case HttpMethod.Post:
                this.app.post(entry.Path, asyncHandler(entry.Handler));
                break;
            case HttpMethod.Put:
                this.app.put(entry.Path, asyncHandler(entry.Handler));
                break;
            case HttpMethod.Delete:
                this.app.delete(entry.Path, asyncHandler(entry.Handler));
                break;
            case HttpMethod.Patch:
                this.app.patch(entry.Path, asyncHandler(entry.Handler));
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