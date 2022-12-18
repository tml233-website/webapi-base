import express, { IRouter } from "express";
import asyncHandler from "express-async-handler";
import core from "express-serve-static-core";

export enum HttpMethod {
    Get,
    Post,
    Put,
    Delete,
    Patch
}

type HandlerArg<P = core.ParamsDictionary, ResBody = any, ReqBody = any, ReqQuery = core.Query> = Parameters<express.RequestHandler<P, ResBody, ReqBody, ReqQuery>>;
type HandlerResult = void | Promise<void>;
export type RouteHandler = (...args: HandlerArg) => HandlerResult;

export const DefaultRouteHandler: RouteHandler = async (req, res) => {
    res.status(501).json({ message: "Not implemented." });
};
export function AddRoute(router: IRouter, method: HttpMethod, path: string, handler: RouteHandler = DefaultRouteHandler) {
    switch (method) {
        case HttpMethod.Get:
            router.get(path, asyncHandler(handler));
            break;
        case HttpMethod.Post:
            router.post(path, asyncHandler(handler));
            break;
        case HttpMethod.Put:
            router.put(path, asyncHandler(handler));
            break;
        case HttpMethod.Delete:
            router.delete(path, asyncHandler(handler));
            break;
        case HttpMethod.Patch:
            router.patch(path, asyncHandler(handler));
            break;
        default:
            throw new Error("Unknown HttpMethod!");
    }
}