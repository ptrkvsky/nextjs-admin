import { FC } from 'react';
import Link from 'next/link';
import { Box } from '@chakra-ui/react';

export const Menu: FC = (): JSX.Element => (
  <nav>
    <Box
      as="ul"
      display="grid"
      gridTemplateColumns="repeat(999, 1fr)"
      gridTemplateRows="1fr"
      listStyleType="none"
      m="0"
      p="0"
      gridGap="4"
    >
      <li>
        <Link href="/admin/auth/signup">Inscription</Link>
      </li>
      <li>
        <Link href="/admin/auth/signin">Connexion</Link>
      </li>
      <li>
        <Link href="/admin/auth/confirmation?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTgsIm5hbWUiOiJ0ZXN0IiwiZW1haWwiOiJsZW8yQGRldmVsb3BwZXVyLXdlYi50ZWNoIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2MzA3OTE4NjQsImV4cCI6MTYzMDc5MjQ2NH0.aJyaPVCQ5z2KCeVpmBAjWSKK2Tkt8Uc6NmyqaOWbG8Y">
          Confirmation
        </Link>
      </li>
    </Box>
  </nav>
);
