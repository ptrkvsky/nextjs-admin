import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Boom from '@hapi/boom';
import prisma from '@/lib/prisma';
import schemaSignup from '@/features/auth/components/signup/form/schemaSignup';
import { sendConfirmationMail } from '@/features/auth/backend/sendConfirmationMail';
import { Session, AuthToken, SignupValues } from '@/features/auth/types';

export const signup = async ({
  name,
  email,
  password,
  passwordConfirm,
}: SignupValues): Promise<Session | Boom.Boom<unknown>> => {
  if (!process.env.JWT_SECRET) {
    return Boom.badImplementation(
      `Variable d'environnement JWT_SECRET manquante.`,
    );
  }

  schemaSignup
    .validate({ name, email, password, passwordConfirm })
    .catch(() => Boom.badRequest(`Format des données invalides.`));

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
