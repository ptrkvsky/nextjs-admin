import { FC, useState } from 'react';
import { FaLock, FaSearch } from 'react-icons/fa';
import {
  chakra,
  FormControl,
  FormErrorMessage,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

interface Props {
  iconColor: string;
  confirmation?: boolean;
}

/**
 * Display password and confirm password input
 * @param iconColor color for lock icon
 * @param confirmation show confirmation password input
 * @returns
 */
export const PasswordInputs: FC<Props> = ({
  iconColor,
  confirmation = true,
}: Props): JSX.Element => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);

  const CFaLock = chakra(FaLock);
  const CFaSearch = chakra(FaSearch);

  return (
    <>
      <FormControl isRequired isInvalid={!!errors?.password}>
        <InputGroup>
          <InputLeftElement pointerEvents="none" color="gray.300">
            <CFaLock color={iconColor} />
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
      </FormControl>
      {confirmation && (
        <FormControl isRequired isInvalid={!!errors?.passwordConfirm}>
          <InputGroup>
            <InputLeftElement pointerEvents="none" color="gray.300">
              <CFaLock color={iconColor} />
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
      )}
    </>
  );
};
