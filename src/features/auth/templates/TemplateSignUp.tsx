import React from 'react';
import { Flex, Heading, Stack, Box, Link, Avatar } from '@chakra-ui/react';
import { FormSignup } from '@/features/auth/components';

export const TemplateSignUp = () => (
  <Flex flexDirection="column" justifyContent="center" alignItems="center">
    <Box marginBottom="36">
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="purple.400" />
        <Heading color="purple.300" size="2xl" as="h1">
          Inscription
        </Heading>
        <Box minW={{ base: `90%`, md: `468px` }}>
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
