import type { NextApiRequest, NextApiResponse } from 'next';
import { SessionPayload, AuthPayload } from '@/features/auth/types';
import { signup } from '@/features/auth/backend/services';
import { Boom } from '@hapi/boom';

function typeGuard(toBeDetermined: any): toBeDetermined is SessionPayload {
  if ((toBeDetermined as SessionPayload).token) {
    return true;
  }
  return false;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SessionPayload | string>,
) {
  if (req.method === `POST`) {
    const authPayload = req.body as AuthPayload;
    if (authPayload) {
      try {
        const data = await signup(authPayload);
        const isToken = typeGuard(data);
        if (isToken) {
          res.status(200).json(data);
        } else {
          const boomError = data as Boom<unknown>;
          res
            .status(boomError.output.statusCode)
            .json(boomError.output.payload.message);
        }
      } catch (err) {
        res
          .status(500)
          .json(`Une erreur est survenue pendant l'enregistrement`);
      }
    } else {
      res.status(400).send(`Données manquantes`);
    }
  } else {
    res.status(405).send(`Methode non autorisée.`);
  }
}
