import express from "express";
import core from "express-serve-static-core";
type HandlerArg<P = core.ParamsDictionary, ResBody = any, ReqBody = any, ReqQuery = core.Query> = Parameters<express.RequestHandler<P, ResBody, ReqBody, ReqQuery>>;
type HandlerResult = void | Promise<void>;
export type RouteHandler = (...args: HandlerArg) => HandlerResult;
export {};
