import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  background,
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
  InputRightElement,
  Link,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaUserAlt, FaLock, FaSearch } from 'react-icons/fa';
import { IoMdMail as IoMail } from 'react-icons/io';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { SignupForm, SignupPayLoad } from '../types';
import { useSignupMutation } from '../api/signupApi';

const CFaLock = chakra(FaLock);
const CFaSearch = chakra(FaSearch);

const schema = yup.object().shape({
  name: yup
    .string()
    .min(4, `La longueur min est 4`)
    .max(20, `La longueur maximale est 20`)
    .required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(4, `La longueur min est 4`)
    .max(20, `La longueur maximale est 20`)
    .required(`Ce champ est obligatoire`),
  passwordConfirm: yup
    .string()
    .min(4, `La longueur min est 4`)
    .max(20, `La longueur maximale est 20`)
    .oneOf(
      [yup.ref(`password`), null],
      `Les mots de passe doivent être identique`,
    )
    .required(`Ce champ est obligatoire`),
});

export const FormSignup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>({
    resolver: yupResolver(schema),
  });
  const [
    signup, // This is the mutation trigger
    { isLoading, data: token, error }, // This is the destructured mutation result
  ] = useSignupMutation();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);

  const bgFormColor = useColorModeValue(`gray.100`, `gray.700`);
  const iconColor = useColorModeValue(`gray.400`, `gray.300`);

  const FormSubmitHandler: SubmitHandler<SignupPayLoad> = (
    data: SignupPayLoad,
  ) => {
    signup(data);
  };

  console.log(error);

  return (
    <form onSubmit={handleSubmit(FormSubmitHandler)}>
      <FormErrorMessage color="gray.500">
        Message d&apos;erreur
      </FormErrorMessage>
      <Stack
        spacing={4}
        p="2rem"
        backgroundColor={bgFormColor}
        boxShadow="md"
        borderRadius="base"
      >
        {/* 
        Name 
        */}
        <FormControl isRequired isInvalid={!!errors?.name}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={FaUserAlt} w={4} h={4} color={iconColor} />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Nom"
              variant="flushed"
              focusBorderColor="pink.400"
              {...register(`name`)}
            />
            <FormErrorMessage>
              {errors.email && `erreur email`}
            </FormErrorMessage>
          </InputGroup>
        </FormControl>
        {/* 
        Email 
        */}
        <FormControl isRequired isInvalid={!!errors?.email}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={IoMail} w={5} h={5} color={iconColor} />
            </InputLeftElement>
            <Input
              type="email"
              placeholder="E-mail"
              variant="flushed"
              focusBorderColor="pink.400"
              {...register(`email`)}
            />
            <FormErrorMessage>
              {errors.email && `erreur email`}
            </FormErrorMessage>
          </InputGroup>
        </FormControl>
        {/* 
        Password 
        */}
        <FormControl isRequired isInvalid={!!errors?.password}>
          <InputGroup>
            <InputLeftElement pointerEvents="none" color="gray.300">
              <CFaLock color="whiteAlpha.900" />
            </InputLeftElement>
            <Input
              type={showPassword ? `text` : `password`}
              placeholder="Mot de passe"
              variant="flushed"
              focusBorderColor="pink.400"
              {...register(`password`)}
            />
            <InputRightElement width="4.5rem">
              <IconButton
                colorScheme="pink"
                aria-label="Afficher le mot de passe"
                icon={<CFaSearch color="pink.400" />}
                onClick={handleShowClick}
                size="md"
                background="transparent"
                _hover={{ background: `transparent`, transform: `scale(1.3)` }}
              />
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage color="red.500">
            {errors.password && errors.password.message}
          </FormErrorMessage>
          {/* 
        Password Confirm
        */}
          <FormControl isRequired isInvalid={!!errors?.passwordConfirm}>
            <InputGroup>
              <InputLeftElement pointerEvents="none" color="gray.300">
                <CFaLock color="whiteAlpha.900" />
              </InputLeftElement>
              <Input
                type={showPassword ? `text` : `password`}
                placeholder="Confirmation"
                variant="flushed"
                focusBorderColor="pink.400"
                {...register(`passwordConfirm`)}
              />
              <InputRightElement width="4.5rem">
                <IconButton
                  colorScheme="pink"
                  aria-label="Afficher le mot de passe"
                  icon={<CFaSearch color="pink.400" />}
                  onClick={handleShowClick}
                  size="md"
                  background="transparent"
                  _hover={{
                    background: `transparent`,
                    transform: `scale(1.3)`,
                  }}
                />
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage color="red.500">
              {errors.passwordConfirm && errors.passwordConfirm.message}
            </FormErrorMessage>
          </FormControl>
          {/* 
          Forgot Password
          */}
          <FormHelperText textAlign="right">
            <Link>Mot de passe oublié ?</Link>
          </FormHelperText>
        </FormControl>
        <Button
          isLoading={isLoading}
          loadingText="Envoi"
          borderRadius={0}
          type="submit"
          variant="solid"
          bg="pink.500"
          color="whiteAlpha.900"
          width="full"
          _focus={{
            transform: `scale(0.98)`,
          }}
        >
          Inscription
        </Button>
      </Stack>
    </form>
  );
};
