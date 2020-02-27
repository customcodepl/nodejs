import express, { Application, urlencoded } from 'express';
import Controller from './controllers/controller.abstract';

class App {
    private app: Application;
    private port: number;

    constructor(controllers: Controller[], port: number) {
        this.app = express();
        this.port = port;

        this.initMiddlewares();
        this.initControllers(controllers);
    }

    private initMiddlewares() {
        this.app.use(urlencoded({ extended: true}));
    }

    private initControllers(controllers: Controller[]) {
        controllers.forEach(controller => { this.app.use('/', controller.router) })
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        })
    }
}

export default App;