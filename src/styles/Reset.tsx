import { Global, css } from '@emotion/react';

const Reset = () => (
  <Global
    styles={css`
      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      input:-webkit-autofill:active {
        -webkit-transition-delay: 9999s;
        transition-delay: 9999s;
      }
    `}
  />
);

export default Reset;
