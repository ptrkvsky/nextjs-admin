import { FC } from 'react';
import { Header } from '@/components/Header';

export const LayoutMain: FC = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);
