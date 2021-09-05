import { Heading, useColorModeValue } from '@chakra-ui/react';
import { FC } from 'react';

export const AdminMainTitle: FC = ({ children }): JSX.Element => {
  const headingColor = useColorModeValue(`purple.500`, `purple.100`);

  return (
    <Heading mb="24" color={headingColor} size="2xl" as="h1">
      {children}
    </Heading>
  );
};
