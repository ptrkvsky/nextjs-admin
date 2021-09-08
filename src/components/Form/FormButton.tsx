import { FC } from 'react';
import { CheckIcon } from '@chakra-ui/icons';

import { Button } from '@chakra-ui/react';
import { QueryStatus } from '@reduxjs/toolkit/dist/query';

interface Props {
  label: string;
  isLoading: boolean;
  status: QueryStatus;
}

export const FormButton: FC<Props> = ({ label, status, isLoading }: Props) => (
  <Button
    leftIcon={status === `fulfilled` ? <CheckIcon /> : <></>}
    isLoading={isLoading}
    loadingText="Envoi"
    borderRadius={0}
    type="submit"
    variant="solid"
    bg={status === `fulfilled` ? `green.500` : `pink.500`}
    color="whiteAlpha.900"
    width="full"
    _focus={{
      transform: `scale(0.98)`,
    }}
  >
    {label}
  </Button>
);

export default FormButton;
