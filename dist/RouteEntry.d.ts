import { HttpMethod, RouteHandler } from "./Route";
export default class RouteEntry {
    private method;
    set Method(method: HttpMethod);
    get Method(): HttpMethod;
    private path;
    set Path(path: string);
    get Path(): string;
    private handler;
    get Handler(): RouteHandler;
    set Handler(handler: RouteHandler);
}
