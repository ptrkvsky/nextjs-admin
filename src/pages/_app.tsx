import React from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/styles/theme';
import Fonts from '@/styles/Fonts';
import Reset from '@/styles/Reset';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Reset />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
