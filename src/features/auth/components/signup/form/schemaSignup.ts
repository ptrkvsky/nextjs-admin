import * as yup from 'yup';

const schemaSignup = yup.object().shape({
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

export default schemaSignup;
