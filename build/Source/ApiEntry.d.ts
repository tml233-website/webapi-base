import express from "express";
import core from "express-serve-static-core";
export declare enum HttpMethod {
    Get = 0,
    Post = 1,
    Put = 2,
    Delete = 3,
    Patch = 4
}
type ApiEntryHandlerArg<P = core.ParamsDictionary, ResBody = any, ReqBody = any, ReqQuery = core.Query> = Parameters<express.RequestHandler<P, ResBody, ReqBody, ReqQuery>>;
type ApiEntryHandlerResult = void | Promise<void>;
export type ApiEntryHandler = (...args: ApiEntryHandlerArg) => ApiEntryHandlerResult;
export declare abstract class ApiEntry {
    private method;
    set Method(method: HttpMethod);
    get Method(): HttpMethod;
    private path;
    set Path(path: string);
    get Path(): string;
    private handler?;
    get Handler(): ApiEntryHandler | undefined;
    set Handler(handler: ApiEntryHandler | undefined);
}
export {};
