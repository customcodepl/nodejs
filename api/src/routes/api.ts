import { Router } from 'express';
import jsonHeader from '../middlewares/jsonHeader';
import health from '../controllers/health';

const router = Router();

router.use(jsonHeader);
router.use('/health', health);

export default router;