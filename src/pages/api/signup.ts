import type { NextApiRequest, NextApiResponse } from 'next';
import { AuthPayLoad, SignupPayLoad } from '@/features/auth/types';
import { signUpUser } from '@/features/auth/backend/signUpUser';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AuthPayLoad | string>,
) {
  if (req.method === `POST`) {
    const signupPayLoad = req.body as SignupPayLoad;
    if (signupPayLoad) {
      const token = await signUpUser(signupPayLoad);
      res.status(200).json(token);
    } else {
      res.status(400).send(`données manquantes`);
    }
  }
}
