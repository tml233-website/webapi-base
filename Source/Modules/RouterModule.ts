import express from "express";
import Module from "./Module";

export default class RouterModule extends Module {
    private readonly router = express.Router();
    protected get Router() {
        return this.router;
    }

    private path: string = "";
    protected set Path(path) {
        this.path = path;
    }
    protected get Path() {
        return this.path;
    }

    public override ApplyTo(router: express.IRouter): void {
        router.use(this.Path, this.Router);
    }
    
    protected AddModule(module: Module): void {
        module.ApplyTo(this.Router);
    }
}