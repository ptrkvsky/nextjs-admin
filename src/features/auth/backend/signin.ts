import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Joi from 'joi';
import Boom from '@hapi/boom';
import prisma from '@/lib/prisma';

export const signin = async (
  email: string,
  password: string,
): Promise<{ token: string }> => {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    throw new Error(`JWT Secret not provided`);
  }

  if (!email || !password) {
    throw new Error(`Invalid argument value`);
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) throw new Error(`Unable to Login`);

  const isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) throw new Error(`Unable to Login`);

  const token = {
    token: jwt.sign(user, jwtSecret),
  };
  return token;
};
