import { ColorModeScript, extendTheme } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

const config = {
  initialColorMode: `dark`,
  useSystemColorMode: false,
};

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="fr">
        <Head />
        <body>
          <ColorModeScript initialColorMode="dark" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
