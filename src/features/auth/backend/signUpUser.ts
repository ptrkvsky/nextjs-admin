import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Boom from '@hapi/boom';
import prisma from '@/lib/prisma';
import { AuthPayLoad, SessionUser, SignupPayLoad } from '@/features/auth/types';

export const signUpUser = async ({
  name,
  email,
  password,
}: SignupPayLoad): Promise<AuthPayLoad> => {
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

  const session: SessionUser = {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
    role: newUser.role,
  };

  const jwtSecret = process.env.JWT_SECRET;
  const token = { token: jwt.sign(session, jwtSecret) };
  return token;
};
