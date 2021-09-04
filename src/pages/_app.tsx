import React from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/styles/theme';
import Fonts from '@/styles/Fonts';
import Reset from '@/styles/Reset';
import { store } from '@/app/store';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Reset />
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}
