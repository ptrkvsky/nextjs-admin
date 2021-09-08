import * as yup from 'yup';

export const schemaSignin = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(3, `La longueur min est 3`)
    .max(30, `La longueur maximale est 30`)
    .required(`Ce champ est obligatoire`),
});
