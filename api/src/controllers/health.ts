import { Router, Request, Response, ErrorRequestHandler } from "express";
import databaseService from '../services/databaseService';

const router = Router();

router.route("/").get((req: Request, res: Response) => {
    databaseService.then(() => {
        res.send({ status: 'ok' });
    }).catch((err: ErrorRequestHandler) => {
        res.send({ status: 'fail' });
    });
});

export default router;
