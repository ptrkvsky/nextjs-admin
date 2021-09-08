import { Box, useColorModeValue } from '@chakra-ui/react';
import { Menu } from '@/components/Header/Menu';
import { ButtonColorMode } from '@/components/Header/ButtonColorMode';
import { theme } from '@/styles/theme/index';

export const Header = () => {
  const shadowHeader = useColorModeValue(`base`, `lg`);

  return (
    <Box as="header" boxShadow={shadowHeader}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        maxW={theme.wrapperWidth}
        mx="auto"
        py="4"
      >
        <Menu />
        <ButtonColorMode />
      </Box>
    </Box>
  );
};
