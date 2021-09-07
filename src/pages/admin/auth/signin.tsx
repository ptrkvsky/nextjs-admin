import { Head } from '@/components/Head';
import { LayoutMain } from '@/components/Layouts/LayoutMain';
import { FormSignin } from '@/features/auth/components/signin/FormSignin';
import FooterSignup from '@/features/auth/components/signup/FooterSignup';
import { TemplateAuth } from '@/features/auth/templates';
import React from 'react';

export default function Signin() {
  return (
    <>
      <Head title="Connexion" />
      <LayoutMain>
        <TemplateAuth title="Connexion" content={<FormSignin />} />
      </LayoutMain>
    </>
  );
}
