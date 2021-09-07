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

/**
 * Template used for signup / signin / Confirmation
 */
interface Props {
  title: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
}
export const TemplateAuth: FC<Props> = ({
  title,
  content,
  footer,
}: Props): JSX.Element => {
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
          <AdminMainTitle>{title}</AdminMainTitle>
          <Box minW={{ base: `90%`, md: `580px` }}>
            {/* <FormSignup /> */}
            {content}
          </Box>
        </Stack>
        {footer && footer}
      </Box>
    </Flex>
  );
};
