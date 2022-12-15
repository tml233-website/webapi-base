import express from "express";
import core from "express-serve-static-core";

export enum HttpMethod {
    Get,
    Post,
    Put,
    Delete,
    Patch
}

type ApiEntryHandlerArg<P = core.ParamsDictionary, ResBody = any, ReqBody = any, ReqQuery = core.Query> = Parameters<express.RequestHandler<P, ResBody, ReqBody, ReqQuery>>;
type ApiEntryHandlerResult = void | Promise<void>;
export type ApiEntryHandler = (...args: ApiEntryHandlerArg) => ApiEntryHandlerResult;

export abstract class ApiEntry {
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

    private handler?:ApiEntryHandler;
    public get Handler(){
        return this.handler;
    }
    public set Handler(handler){
        this.handler=handler;
    }
}