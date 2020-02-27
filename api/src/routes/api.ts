import { Router } from 'express';
import users from '../controllers/users';
import jsonHeader from '../middlewares/jsonHeader';

const router = Router();

router.use(jsonHeader);
router.use('/users', users);

export default router;