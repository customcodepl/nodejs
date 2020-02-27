import App from './app';
import UsersController from './controllers/users';
import { port } from './config';

const app = new App(
    [
        new UsersController()
    ],
    3000
);

app.listen();