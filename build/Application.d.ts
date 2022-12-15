import express from "express";
import { EndpointConfig } from "./Config";
import { ApiEntry } from "./ApiEntry";
export declare class Application {
    private app;
    protected get App(): express.Application;
    private endpointConfig;
    constructor(globalConfig: EndpointConfig);
    AddApiEntry(entry: ApiEntry): void;
    Run(): void;
}
