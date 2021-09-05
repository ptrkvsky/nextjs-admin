import { useConfirmQuery } from '@/features/auth/api/confirmationApi';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import React from 'react';

export const BoxConfirmation = () => {
  const router = useRouter();
  const { token } = router.query;

  const { data, isFetching } = useConfirmQuery(token as string);

  return router.query?.token ? (
    <div>Votre compte a bien été créé</div>
  ) : (
    <Alert
      status="error"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <AlertIcon />
      <AlertTitle mr={2}>Erreur dans l&apos;url.</AlertTitle>
      <AlertDescription>
        Le paramètre <i>Token</i> dans l&apos;adresse est manquant ou invalide.
      </AlertDescription>
    </Alert>
  );
};
