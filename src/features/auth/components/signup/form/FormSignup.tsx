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
import { FaUserAlt } from 'react-icons/fa';
import { IoMdMail as IoMail } from 'react-icons/io';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { SignupValues } from '@/features/auth/types';
import { FormErrors } from '@/components/Form';
import { FormButton } from '@/components/Form/FormButton';
import schemaSignup from '@/features/auth/components/signup/form/schemaSignup';
import { useSignupMutation } from '@/features/auth/api/signupApi';
import { PasswordInputs } from '@/features/auth/components/PasswordsInputs';

export const FormSignup = () => {
  const methods = useForm<SignupValues>({
    resolver: yupResolver(schemaSignup),
  });
  const [
    signup, // This is the mutation trigger
    { isLoading, error, status }, // This is the destructured mutation result
  ] = useSignupMutation();

  const bgFormColor = useColorModeValue(`gray.100`, `gray.700`);
  const iconColor = useColorModeValue(`gray.400`, `gray.300`);

  const FormSubmitHandler: SubmitHandler<SignupValues> = (
    data: SignupValues,
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

          <FormButton
            label="Inscription"
            isLoading={isLoading}
            status={status}
          />
          {error && <FormErrors error={error as FetchBaseQueryError} />}
        </Stack>
      </form>
    </FormProvider>
  );
};
