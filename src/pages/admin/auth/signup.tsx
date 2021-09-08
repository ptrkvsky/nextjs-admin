import React from 'react';
import { Head } from '@/components/Head';
import { LayoutMain } from '@/components/Layouts/LayoutMain';
import { TemplateAuth } from '@/features/auth/templates';
import FooterSignup from '@/features/auth/components/signup/FooterSignup';
import { FormSignup } from '@/features/auth/components';

export default function Signup() {
  return (
    <>
      <Head title="Inscription" />
      <LayoutMain>
        <TemplateAuth
          title="Inscription"
          content={<FormSignup />}
          footer={FooterSignup}
        />
      </LayoutMain>
    </>
  );
}
