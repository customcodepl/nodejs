import { Router, Request, Response } from "express";

const router = Router();

router.route("/").get((req: Request, res: Response) => {
    res.send({ users: { foo: "barr" } });
});

export default router;
