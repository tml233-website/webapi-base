import express from "express";
import Module from "./Module";
export default class RouterModule extends Module {
    private readonly router;
    protected get Router(): import("express-serve-static-core").Router;
    private path;
    protected set Path(path: string);
    protected get Path(): string;
    ApplyTo(router: express.IRouter): void;
    protected AddModule(module: Module): void;
}
