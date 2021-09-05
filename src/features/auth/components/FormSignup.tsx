import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  chakra,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaUserAlt } from 'react-icons/fa';
import { IoMdMail as IoMail } from 'react-icons/io';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { FormErrors } from '@/components/Form';
import { CheckIcon } from '@chakra-ui/icons';
import { SignupForm, SignupPayLoad } from '../types';
import { useSignupMutation } from '../api/signupApi';
import { PasswordInputs } from './PasswordsInputs';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, `La longueur min est 3`)
    .max(30, `La longueur maximale est 30`)
    .required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(4, `La longueur min est 3`)
    .max(30, `La longueur maximale est 30`)
    .required(`Ce champ est obligatoire`),
  passwordConfirm: yup
    .string()
    .min(4, `La longueur min est 3`)
    .max(30, `La longueur maximale est 30`)
    .oneOf(
      [yup.ref(`password`), null],
      `Les mots de passe doivent être identique`,
    )
    .required(`Ce champ est obligatoire`),
});

export const FormSignup = () => {
  const methods = useForm<SignupForm>({
    resolver: yupResolver(schema),
  });
  const [
    signup, // This is the mutation trigger
    { isLoading, data: token, error, status }, // This is the destructured mutation result
  ] = useSignupMutation();

  const bgFormColor = useColorModeValue(`gray.100`, `gray.700`);
  const iconColor = useColorModeValue(`gray.400`, `gray.300`);

  const FormSubmitHandler: SubmitHandler<SignupPayLoad> = (
    data: SignupPayLoad,
  ) => {
    signup(data);
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
          <FormControl isRequired isInvalid={!!methods.formState.errors?.name}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={FaUserAlt} w={4} h={4} color={iconColor} />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Nom"
                variant="flushed"
                focusBorderColor="pink.400"
                {...methods.register(`name`)}
              />
              <FormErrorMessage>
                {methods.formState.errors.email && `erreur email`}
              </FormErrorMessage>
            </InputGroup>
          </FormControl>

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

          <PasswordInputs iconColor={iconColor} />

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
            Inscription
          </Button>
          {error && <FormErrors error={error as FetchBaseQueryError} />}
        </Stack>
      </form>
    </FormProvider>
  );
};
