import React from 'react';
import { Head } from '@/components/Head';
import { TemplateLogin } from '@/features/auth/templates/TemplateLogin';
import { LayoutMain } from '@/components/Layouts/LayoutMain';

export default function Signup() {
  return (
    <>
      <Head title="Login" />
      <LayoutMain>
        <TemplateLogin />
      </LayoutMain>
    </>
  );
}
