import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Boom from '@hapi/boom';
import prisma from '@/lib/prisma';
import { SigninValues, Session } from '@/features/auth/types';
import { schemaSignin } from '@/features/auth/components/signin/form';

export const signin = async ({
  email,
  password,
}: SigninValues): Promise<Session | Boom.Boom<unknown>> => {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    throw new Error(`JWT Secret not provided`);
  }

  schemaSignin
    .validate({ email, password })
    .catch(() => Boom.badRequest(`Format des données invalides.`));

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user)
    return Boom.badRequest(`Utilisateur inconnu dans la base de données.`);

  const isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) return Boom.badRequest(`Mot de passe incorrect.`);

  const token = {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      active: user.active,
      role: user.role,
    },
    token: jwt.sign(user, jwtSecret),
  };
  return token;
};
