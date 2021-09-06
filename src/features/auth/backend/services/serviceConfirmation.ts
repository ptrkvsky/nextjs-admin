import { AuthToken } from '@/features/auth/types';
import jwt from 'jsonwebtoken';
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
 * @returns Boom error or true
 */
export const serviceConfirmation = async (
  token: string,
): Promise<Boom.Boom<unknown> | boolean> => {
  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    throw new Error(`JWT Secret not provided`);
  }

  try {
    const authToken = token && jwt.verify(token, jwtSecret);
    if (checkIsAuthToken(authToken)) {
      await prisma.user.update({
        where: {
          email: authToken.email,
        },
        data: {
          active: true,
        },
      });
    }
    return true;
  } catch (err) {
    return Boom.badRequest(`Invalid token`);
  }
};
