import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  chakra,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Stack,
  IconButton,
} from '@chakra-ui/react';
import { FaUserAlt, FaLock, FaSearch } from 'react-icons/fa';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CFaSearch = chakra(FaSearch);

interface IFormInputs {
  name: string;
  email: string;
  password: string;
}

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
});

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);

  const formSubmitHandler: SubmitHandler<IFormInputs> = async (
    data: IFormInputs,
  ) => {
    fetch(`http://localhost:3000/api/signup`, {
      method: `POST`,
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <form onSubmit={handleSubmit(formSubmitHandler)}>
      <FormErrorMessage color="gray.500">
        Message d&apos;erreur
      </FormErrorMessage>
      <Stack
        spacing={4}
        p="2rem"
        backgroundColor="gray.800"
        boxShadow="md"
        borderRadius="base"
      >
        {/* Email */}
        <FormControl isRequired isInvalid={!!errors?.name}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <CFaUserAlt color="whiteAlpha.900" />
            </InputLeftElement>
            <Input
              backgroundColor="gray.700"
              color="whiteAlpha.900"
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
        {/* Email */}
        <FormControl isRequired isInvalid={!!errors?.email}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <CFaUserAlt color="whiteAlpha.900" />
            </InputLeftElement>
            <Input
              backgroundColor="gray.700"
              color="whiteAlpha.900"
              type="email"
              placeholder="Email adresse"
              variant="flushed"
              focusBorderColor="pink.400"
              {...register(`email`)}
            />
            <FormErrorMessage>
              {errors.email && `erreur email`}
            </FormErrorMessage>
          </InputGroup>
        </FormControl>
        {/* Password */}
        <FormControl isRequired isInvalid={!!errors?.password}>
          <InputGroup>
            <InputLeftElement pointerEvents="none" color="gray.300">
              <CFaLock color="whiteAlpha.900" />
            </InputLeftElement>
            <Input
              backgroundColor="gray.700"
              color="whiteAlpha.900"
              type={showPassword ? `text` : `password`}
              placeholder="Mot de passe"
              variant="flushed"
              focusBorderColor="pink.400"
              {...register(`password`)}
            />
            <InputRightElement width="4.5rem">
              <IconButton
                colorScheme="pink"
                aria-label="Search database"
                icon={<CFaSearch />}
                onClick={handleShowClick}
                size="sm"
                background="transparent"
              />
            </InputRightElement>
          </InputGroup>
          {/* Forgot Password */}
          <FormErrorMessage color="red.500">
            {errors.password && errors.password.message}
          </FormErrorMessage>
          {/* Forgot Password */}
          <FormHelperText textAlign="right">
            <Link color="whiteAlpha.800">Mot de passe oublié ?</Link>
          </FormHelperText>
        </FormControl>
        <Button
          borderRadius={0}
          type="submit"
          variant="solid"
          colorScheme="pink"
          width="full"
          _focus={{
            transform: `scale(0.98)`,
          }}
        >
          Connexion
        </Button>
      </Stack>
    </form>
  );
};
