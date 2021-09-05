import { FC } from 'react';
import { Button, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const ButtonColorMode: FC = (): JSX.Element => {
  const { colorMode, setColorMode } = useColorMode();
  const toggleColorMode = () => {
    if (colorMode === `light`) {
      setColorMode(`dark`);
    } else if (colorMode === `dark`) {
      setColorMode(`light`);
    }
  };
  return (
    <Button
      variant="ghost"
      size="sm"
      bg=" purple.400"
      onClick={() => toggleColorMode()}
    >
      {colorMode === `dark` ? (
        <MoonIcon color="whiteAlpha.900" />
      ) : (
        <SunIcon color="blackAlpha.900" />
      )}
    </Button>
  );
};
