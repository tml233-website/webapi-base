import { IRouter } from "express";
export default abstract class Module {
    abstract ApplyTo(router: IRouter): void;
}
