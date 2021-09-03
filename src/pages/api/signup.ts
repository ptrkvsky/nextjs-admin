// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { IAuthPayLoad } from '@/interfaces/AuthPayLoad';
import { signUpUser } from '@/features/auth/api/signUpUser';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IAuthPayLoad | string>,
) {
  if (req.method === `POST`) {
    const { name, email, password } = req.body;
    if (name && email && password) {
      const token = await signUpUser(name, email, password);
      res.status(200).json(token);
    } else {
      res.status(400).send(`données manquantes`);
    }
  }
}
