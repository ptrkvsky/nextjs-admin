import { Global, css } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'Gilroy Semibold';
        src: url('/fonts/gilroy/Gilroy-Semibold.woff2') format('woff2');
      }

      @font-face {
        font-family: 'Gilroy Extrabold';
        src: url('/fonts/gilroy/Gilroy-Extrabold.woff2') format('woff2');
      }

      @font-face {
        font-family: 'Adelle Regular';
        src: url('/fonts/adelle/AdelleSansBasic_Regular.woff') format('woff');
      }

      @font-face {
        font-family: 'Adelle Bold';
        src: url('/fonts/adelle/AdelleSansBasic_Bold.woff') format('woff');
      }
    `}
  />
);

export default Fonts;
