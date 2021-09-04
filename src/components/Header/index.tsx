import { Button, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import React from 'react';

export const Header = () => {
  const { colorMode, setColorMode } = useColorMode();
  const toggleColorMode = () => {
    if (colorMode === `light`) {
      setColorMode(`dark`);
    } else if (colorMode === `dark`) {
      setColorMode(`light`);
    }
  };
  return (
    <header>
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
    </header>
  );
};
