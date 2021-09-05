import type { NextApiRequest, NextApiResponse } from 'next';
import { AuthPayLoad, SignupPayLoad } from '@/features/auth/types';
import { signup } from '@/features/auth/backend/signup';
import { Boom } from '@hapi/boom';

function typeGuard(toBeDetermined: any): toBeDetermined is AuthPayLoad {
  if ((toBeDetermined as AuthPayLoad).token) {
    return true;
  }
  return false;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AuthPayLoad | string | Boom<unknown>>,
) {
  if (req.method === `POST`) {
    const signupPayLoad = req.body as SignupPayLoad;
    if (signupPayLoad) {
      try {
        const data = await signup(signupPayLoad);
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
        res.status(500).json(err);
      }
    } else {
      res.status(400).send(`Données manquantes`);
    }
  } else {
    res.status(405).send(`Methode non autorisée.`);
  }
}
