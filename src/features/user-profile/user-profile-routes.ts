import { Router } from 'express';

import { asyncHandler } from '../../utils/async-handler.js';
import { getAllUserProfiles } from './user-profile-controller.js';

const router = Router();

router.get('/', asyncHandler(getAllUserProfiles));

export { router as userProfileRoutes };
