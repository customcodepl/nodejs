import { Router } from 'express';

abstract class Controller {
    public router = Router();
    protected abstract path: string;
    protected abstract initRoutes(): void;
}

export default Controller;