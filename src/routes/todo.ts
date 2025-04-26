import { Router } from 'express';
import { getTodos } from '../controllers/todo';

const router = Router();

router.get('/', getTodos);

export default router;