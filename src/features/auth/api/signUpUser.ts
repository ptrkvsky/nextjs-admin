import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Boom from '@hapi/boom';
import prisma from '@/lib/prisma';
import { IAuthPayLoad } from '@/interfaces/AuthPayLoad';
import { ISessionUser } from '@/interfaces/Session';

export const signUpUser = async (
  name: string | null,
  email: string,
  password: string,
): Promise<IAuthPayLoad> => {
  if (!process.env.JWT_SECRET) {
    throw Boom.badImplementation(`Il manque le JWT`);
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (user) {
    Boom.badRequest(`L'utilisateur existe déjà`);
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
    throw Boom.badImplementation(`Impossible de créer le nouvel utilisateur`);
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
