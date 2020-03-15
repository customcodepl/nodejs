import { Router, Request, Response } from "express";

const router = Router();

router.route("/").post((req: Request, res: Response) => {
    console.log(req);
    res.send({foo: 'bar'});
});

export default router;
