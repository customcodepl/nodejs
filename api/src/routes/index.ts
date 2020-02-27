import { Router } from 'express';
import user from './user';
import jsonHeader from '../middlewares/jsonHeader';

const router = Router();

router.use(jsonHeader);
router.use('/user', user);

export default router;