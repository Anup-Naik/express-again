import type { Express } from 'express';
import express from 'express';

import { apiV1Router } from './routes.js';

export function buildApp(): Express {
  const app = express();

  // Middleware for JSON parsing.
  app.use(express.json());

  // /api/v1/ routes
  app.use('/api/v1', apiV1Router);

  return app;
}
