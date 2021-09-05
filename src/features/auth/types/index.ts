import { Role } from '@prisma/client';

export interface AuthPayLoad {
  token: string;
}

export interface SignupPayLoad {
  name: string | null;
  email: string;
  password: string;
}

export interface SignupForm extends SignupPayLoad {
  passwordConfirm: string;
}

export interface AuthToken {
  id: number;
  name: string | null;
  email: string;
  role: Role;
}
