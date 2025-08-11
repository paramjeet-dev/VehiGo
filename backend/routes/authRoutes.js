import express from 'express';
import { login, signup,verifyToken } from '../controllers/authController.js';
import rateLimit from 'express-rate-limit'

const router = express.Router();

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // limit each IP to 10 requests per windowMs
    message: 'Too many login attempts, please try again later.',
});

router.post('/login', loginLimiter, login);
router.post('/signup', signup);
router.get('/me', verifyToken);

export default router;