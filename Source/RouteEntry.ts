import { DefaultRouteHandler, HttpMethod, RouteHandler } from "./Route";

export default class RouteEntry {
    private method: HttpMethod = HttpMethod.Get;
    public set Method(method) {
        this.method = method;
    }
    public get Method() {
        return this.method;
    }

    private path: string = "";
    public set Path(path) {
        this.path = path;
    }
    public get Path() {
        return this.path;
    }

    private handler: RouteHandler = DefaultRouteHandler;
    public get Handler() {
        return this.handler;
    }
    public set Handler(handler) {
        this.handler = handler;
    }
}