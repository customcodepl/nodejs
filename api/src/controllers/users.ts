import { Request, Response } from 'express';
import Controller from './controller.abstract';

class UsersController extends Controller {
    protected path = '/users';

    constructor() {
        super();
        this.initRoutes();
    }

    initRoutes() {
        this.router.get(this.path, this.getUsers);
    }

    getUsers = (req: Request, res: Response) => {
        res.send('user');
    }
}

export default UsersController;