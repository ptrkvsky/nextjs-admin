import { AuthToken } from '@/features/auth/types';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Joi from 'joi';
import Boom from '@hapi/boom';
import prisma from '@/lib/prisma';

function checkIsAuthToken(toBeDetermined: any): toBeDetermined is AuthToken {
  if ((toBeDetermined as AuthToken).email) {
    return true;
  }
  return false;
}

/**
 * Check if JWT Token is valid
 * @param token
 * @returns Error or success
 */
export const confirmation = async (
  token: string,
): Promise<Boom.Boom<unknown> | string> => {
  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    throw new Error(`JWT Secret not provided`);
  }

  try {
    const user = token && jwt.verify(token, jwtSecret);
    if (checkIsAuthToken(user)) {
      const userActive = await prisma.user.update({
        where: {
          email: user.email,
        },
        data: {
          active: true,
        },
      });
    }
    return `ok`;
  } catch (err) {
    return Boom.badRequest(`Invalid token`);
  }

  // const user = await prisma.user.findUnique({
  //   where: {
  //     email,
  //   },
  // });
  // if (!user) throw new Error(`Unable to Login`);

  // const isMatch = bcrypt.compareSync(password, user.password);
  // if (!isMatch) throw new Error(`Unable to Login`);

  // const token = {
  //   token: jwt.sign(user, jwtSecret),
  // };
  // return token;
};
