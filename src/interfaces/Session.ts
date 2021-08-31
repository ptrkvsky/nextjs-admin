import { Role } from '@prisma/client';

export interface ISessionUser {
  id: number;
  name: string | null;
  email: string;
  role: Role;
}
