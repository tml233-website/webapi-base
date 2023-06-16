import express from "express";
import { EndpointConfig } from "./Config";
import Module from "./Modules/Module";
export default class Application {
    private readonly app;
    protected get App(): express.Application;
    private readonly endpointConfig;
    constructor(globalConfig: EndpointConfig);
    protected AddModule(module: Module): void;
    Run(): void;
}
