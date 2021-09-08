import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  FormControl,
  FormErrorMessage,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { IoMdMail as IoMail } from 'react-icons/io';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import type { SigninValues } from '@/features/auth/types';
import { useAppDispatch } from '@/app/hooks';
import { FormErrors } from '@/components/Form';
import { FormButton } from '@/components/Form/FormButton';
import { useSigninMutation } from '@/features/auth/api/signinApi';
import { PasswordInputs } from '@/features/auth/components';
import { setSession } from '@/features/auth/slices/authSlice';
import { schemaSignin } from './schemaSignin';

export const FormSignin = () => {
  const methods = useForm<SigninValues>({
    resolver: yupResolver(schemaSignin),
  });
  const dispatch = useAppDispatch();

  const [
    signin, // This is the mutation trigger
    { isLoading, error, status }, // This is the destructured mutation result
  ] = useSigninMutation();

  const bgFormColor = useColorModeValue(`gray.100`, `gray.700`);
  const iconColor = useColorModeValue(`gray.400`, `gray.300`);

  const FormSubmitHandler: SubmitHandler<SigninValues> = async (
    data: SigninValues,
  ) => {
    try {
      const session = await signin(data).unwrap();
      dispatch(setSession(session));
    } catch (errorLogin) {
      console.error(errorLogin);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(FormSubmitHandler)}>
        <Stack
          spacing={4}
          p="2rem"
          backgroundColor={bgFormColor}
          boxShadow="md"
          borderRadius="base"
        >
          <FormControl isRequired isInvalid={!!methods.formState.errors?.email}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={IoMail} w={5} h={5} color={iconColor} />
              </InputLeftElement>
              <Input
                type="email"
                placeholder="E-mail"
                variant="flushed"
                focusBorderColor="pink.400"
                {...methods.register(`email`)}
              />
              <FormErrorMessage>
                {methods.formState.errors.email && `erreur email`}
              </FormErrorMessage>
            </InputGroup>
          </FormControl>

          <PasswordInputs confirmation={false} iconColor={iconColor} />

          <FormButton label="Connexion" isLoading={isLoading} status={status} />
          {error && <FormErrors error={error as FetchBaseQueryError} />}
        </Stack>
      </form>
    </FormProvider>
  );
};
