import { FC } from 'react';
import {
  Avatar,
  Box,
  Flex,
  Link,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { FormSignup } from '@/features/auth/components';
import { AdminMainTitle } from '@/components/Titles';

export const TemplateSignup: FC = (): JSX.Element => {
  const iconBg = useColorModeValue(`purple.500`, `purple.100`);
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Box marginBottom="36">
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar bg={iconBg} />
          <AdminMainTitle>Inscription</AdminMainTitle>
          <Box minW={{ base: `90%`, md: `580px` }}>
            <FormSignup />
          </Box>
        </Stack>
        <Box>
          Déjà un compte ?
          <Link color="purple.300" href="/admin/signin">
            GO GO GO !
          </Link>
        </Box>
      </Box>
    </Flex>
  );
};
