import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Joi from 'joi';
import Boom from '@hapi/boom';
import prisma from '@/lib/prisma';
import { sendConfirmationMail } from '@/features/auth/backend/sendConfirmationMail';
import { SessionPayload, AuthToken, AuthPayload } from '@/features/auth/types';

const schema = Joi.object({
  name: Joi.string().min(3).max(30),
  password: Joi.string().min(3).max(30),
  email: Joi.string().email({ minDomainSegments: 2 }),
});

export const signup = async ({
  name,
  email,
  password,
}: AuthPayload): Promise<SessionPayload | Boom.Boom<unknown>> => {
  if (!process.env.JWT_SECRET) {
    return Boom.badImplementation(
      `Variable d'environnement JWT_SECRET manquante.`,
    );
  }

  const { error } = schema.validate({ name, email, password });
  if (error) {
    return Boom.badRequest(`Format des données invalides.`);
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (user) {
    return Boom.badRequest(`L'utilisateur existe déjà.`);
  }

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: bcrypt.hashSync(password, 3),
    },
  });

  if (!newUser) {
    return Boom.badImplementation(`Impossible de créer le nouvel utilisateur.`);
  }

  const session: AuthToken = {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
    role: newUser.role,
  };

  const jwtSecret = process.env.JWT_SECRET;
  const token = jwt.sign(session, jwtSecret, { expiresIn: `10d` });

  try {
    sendConfirmationMail(email, token);
  } catch (err) {
    return Boom.badImplementation(
      `Une erreur est survenue pendant l'envoie du mail de confirmation.`,
    );
  }

  await prisma.token.create({
    data: {
      type: `EMAIL`,
      token,
      userId: newUser.id,
    },
  });

  return { token };
};
