import { Router } from 'express';

import { userProfileRoutes } from '~/features/user-profile/user-profile-routes.js';

import { healthCheckRoutes } from './features/health-check/health-check-routes.js';
import { userAuthenticationRoutes } from './features/user-authentication/user-authentication-routes.js';

export const apiV1Router = Router();

apiV1Router.use('/health-check', healthCheckRoutes);
apiV1Router.use(userAuthenticationRoutes);
apiV1Router.use('/user-profiles', userProfileRoutes);
