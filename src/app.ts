import express from 'express';

export function buildApp() {
  const app = express();

  // Middleware for JSON parsing.
  app.use(express.json());

  return app;
}
