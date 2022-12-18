import express, { IRouter } from "express";
import core from "express-serve-static-core";
export declare enum HttpMethod {
    Get = 0,
    Post = 1,
    Put = 2,
    Delete = 3,
    Patch = 4
}
type HandlerArg<P = core.ParamsDictionary, ResBody = any, ReqBody = any, ReqQuery = core.Query> = Parameters<express.RequestHandler<P, ResBody, ReqBody, ReqQuery>>;
type HandlerResult = void | Promise<void>;
export type RouteHandler = (...args: HandlerArg) => HandlerResult;
export declare const DefaultRouteHandler: RouteHandler;
export declare function AddRoute(router: IRouter, method: HttpMethod, path: string, handler?: RouteHandler): void;
export {};
