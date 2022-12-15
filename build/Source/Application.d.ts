import { EndpointConfig } from "./Config";
import { ApiEntry } from "./ApiEntry";
export declare class Application {
    private app;
    private endpointConfig;
    constructor(globalConfig: EndpointConfig);
    AddApiEntry(entry: ApiEntry): void;
    Run(): void;
}
