import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from '@chakra-ui/react';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import React from 'react';

/**
 * Handle errors returns returned by the backend
 * @param error
 */

interface PropsFormErrors {
  error: FetchBaseQueryError;
}

export const FormErrors = ({ error }: PropsFormErrors) => {
  const errorMessage =
    error.status === 500
      ? `Une erreur inatendue est survenue pendant l'enregistrement 😢`
      : (error.data as string);

  return (
    <Alert
      status="error"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <AlertIcon />
      <AlertTitle mr={2}>Erreur de validation</AlertTitle>
      <AlertDescription>{errorMessage}</AlertDescription>
      <CloseButton position="absolute" right="8px" top="8px" />
    </Alert>
  );
};
