import { Router } from 'express';
import auth from '../middlewares/auth';
import jsonHeader from '../middlewares/jsonHeader';
import login from '../controllers/login';
import health from '../controllers/health';

const router = Router();

router.use(jsonHeader);
router.use('/login', login);
// router.use(auth);
router.use('/health', health);

export default router;