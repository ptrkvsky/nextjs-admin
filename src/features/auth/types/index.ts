import { User as PrismaUser, Role } from '@prisma/client';

export interface SessionPayload {
  token: string;
}

export interface AuthToken {
  id: number;
  name: string | null;
  email: string;
  role: Role;
}

export interface SignupForm extends AuthPayload {
  passwordConfirm: string;
}

export interface AuthPayload {
  name: string | null;
  email: string;
  password: string;
}

export type User = Omit<PrismaUser, 'password'>;
