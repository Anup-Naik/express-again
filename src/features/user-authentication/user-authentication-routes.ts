import { Router } from 'express';

import { asyncHandler } from '../../utils/async-handler.js';
import { login } from './user-authentication-controller.js';

const router = Router();

router.post('/login', asyncHandler(login));

export { router as userAuthenticationRoutes };
