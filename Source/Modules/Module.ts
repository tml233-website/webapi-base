import { IRouter } from "express";

export default abstract class Module {
    public abstract ApplyTo(router: IRouter): void;
}