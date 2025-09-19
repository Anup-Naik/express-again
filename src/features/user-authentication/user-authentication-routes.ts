import { Router } from 'express';

import { asyncHandler } from '../../utils/async-handler.js';
import { login, logout, register } from './user-authentication-controller.js';

const router = Router();

router.post('/login', asyncHandler(login));
router.post('/logout', asyncHandler(logout));
router.post('/register', asyncHandler(register));

export { router as userAuthenticationRoutes };
