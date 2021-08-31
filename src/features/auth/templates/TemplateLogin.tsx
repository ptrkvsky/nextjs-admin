import React from 'react';
import { Flex, Heading, Stack, Box, Link, Avatar } from '@chakra-ui/react';
import { LoginForm } from '@/features/auth/components/LoginForm';

export const TemplateLogin = () => (
  <Flex
    flexDirection="column"
    width="100wh"
    height="100vh"
    justifyContent="center"
    alignItems="center"
  >
    <Box marginBottom="36">
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="purple.800" />
        <Heading color="purple.800">Kovsky Back</Heading>
        <Box minW={{ base: `90%`, md: `468px` }}>
          <LoginForm />
        </Box>
      </Stack>
      <Box color="whiteAlpha.900">
        Pas de compte ?{` `}
        <Link color="purple.300" href="/">
          GO GO GO !
        </Link>
      </Box>
    </Box>
  </Flex>
);
