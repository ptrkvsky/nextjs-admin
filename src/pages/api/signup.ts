// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';
import { IAuthPayLoad } from '@/interfaces/AuthPayLoad';
import { ISessionUser } from '@/interfaces/Session';

const signUpUser = async (
  name: string | null,
  email: string,
  password: string,
): Promise<IAuthPayLoad> => {
  if (!process.env.JWT_SECRET) {
    throw new Error(`Env variable JWT_SECRET is missing`);
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (user) {
    throw new Error(`This user already exists`);
  }

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: bcrypt.hashSync(password, 3),
      role: `USER`,
    },
  });

  if (!newUser) {
    throw new Error(`Error creating user`);
  }

  const session: ISessionUser = {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
    role: newUser.role,
  };
  const jwtSecret = process.env.JWT_SECRET;
  const token = { token: jwt.sign(session, jwtSecret) };
  return token;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IAuthPayLoad>,
) {
  if (req.method === `POST`) {
    const { name, email, password } = req.body;
    if (name && email && password) {
      const token = await signUpUser(name, email, password);
      res.status(200).json(token);
    }
  }
}
