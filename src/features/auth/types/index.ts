import { User as PrismaUser, Role } from '@prisma/client';

export interface AuthToken {
  id: number;
  name: string | null;
  email: string;
  role: Role;
}

export interface Session {
  user: User | null;
  token: string | null;
}
export interface SignupValues {
  name: string | null;
  email: string;
  password: string;
  passwordConfirm: string;
}

export type SigninValues = Omit<SignupValues, 'name' | 'passwordConfirm'>;

export type User = Omit<PrismaUser, 'password'>;
