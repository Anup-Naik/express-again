import type { Request, Response } from 'express';
import { z } from 'zod';

import { requireAuthentication } from '../../middleware/require-authentication.js';
import { validateQuery } from '../../middleware/validate.js';
import { retrieveManyUserProfilesFromDatabase } from './user-profile-model.js';

export async function getAllUserProfiles(request: Request, response: Response) {
  requireAuthentication(request, response);
  const query = await validateQuery(
    z.object({
      page: z.coerce.number().positive().default(1),
      pageSize: z.coerce.number().positive().default(10),
    }),
    request,
    response,
  );

  const profiles = await retrieveManyUserProfilesFromDatabase({
    page: query.page,
    pageSize: query.pageSize,
  });

  response.status(200).json(profiles);
}
