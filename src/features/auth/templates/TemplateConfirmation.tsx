import React from 'react';
import { Flex, Stack, Box, Avatar } from '@chakra-ui/react';

import { AdminMainTitle } from '@/components/Titles';
import { BoxConfirmation } from '@/features/auth/components/BoxConfirmation';

export const TemplateConfirmation = () => (
  <Flex flexDirection="column" justifyContent="center" alignItems="center">
    <Box marginBottom="36">
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="purple.200" />
        <AdminMainTitle>Confirmation</AdminMainTitle>
        <Box minW={{ base: `90%`, md: `580px` }}>
          <BoxConfirmation />
        </Box>
      </Stack>
    </Box>
  </Flex>
);
