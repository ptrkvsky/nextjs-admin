import type { NextApiRequest, NextApiResponse } from 'next';
import { serviceConfirmation } from '@/features/auth/backend/services';
import { Boom } from '@hapi/boom';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  if (req.method === `GET`) {
    const token = req.headers.authorization?.split(` `)[1];
    if (token) {
      const data = await serviceConfirmation(token as string);
      if (typeof data === `string`) {
        res.status(200).json(data);
      } else {
        const boomError = data as Boom<unknown>;
        res
          .status(boomError.output.statusCode)
          .json(boomError.output.payload.message);
      }
    } else {
      res.status(200).json(`Token manquant`);
    }
  }
}
