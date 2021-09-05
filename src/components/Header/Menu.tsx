import { FC } from 'react';
import Link from 'next/link';
import { Box } from '@chakra-ui/react';

export const Menu: FC = (): JSX.Element => (
  <nav>
    <Box
      as="ul"
      display="grid"
      gridTemplateColumns="repeat(5, 1fr)"
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
        <Link href="/admin/auth/confirmation?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjMsIm5hbWUiOiJxc2Rxc2QiLCJlbWFpbCI6InFzZHFzZHFzZEBzZHNzLmNvbSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNjMwODc0ODQ1LCJleHAiOjE2MzE3Mzg4NDV9.pJtl_7QPDlmRZ3yW7mn1F-eAlO_ANGRg6_yxuZYm1jo">
          Confirmation
        </Link>
      </li>
    </Box>
  </nav>
);
